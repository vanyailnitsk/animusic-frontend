import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './SignUp.module.css'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import logo from "../../icons/logo.ico";
import {useNavigate} from "react-router-dom";
import {LOGIN} from "../../navigation/routes";
const schema = z.object({
    username:z.string(),
    email: z.string().email(),
    password: z.string().min(4)
})

type FormFields = z.infer<typeof schema>
const SignUp = () => {
    const {userStore} = useContext(Context)
    const navigate = useNavigate()
    const {register, handleSubmit, setError, formState: {errors,isSubmitting}} = useForm<FormFields>({resolver:zodResolver(schema)})
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        userStore.registration(data.username,data.email, data.password)
    }
    return (
        <div className={styles.signup__wrapper}>
            <form className={styles.signup__content} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.signup__data}>
                    <input {...register("username", {
                        required: true,
                    })}
                           type="text"
                           placeholder="Username"/>
                    {errors.username && (
                        <div>{errors.username.message}</div>
                    )}
                    <input {...register("email", {
                        required: true,
                    })}
                           type="text"
                           placeholder="Email"/>
                    {errors.email && (
                        <div>{errors.email.message}</div>
                    )}
                    <input {...register('password', {
                        required:true,
                    })}
                           type="password"
                           placeholder="Password"/>
                    {errors.password && (
                        <div>{errors.password.message}</div>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting}>{isSubmitting? 'Loading...' : 'Sign up'}</button>
                <div className={styles.redirection}>
                    <span>Already have an account?</span>
                    <span onClick={() => navigate(LOGIN)} style={{cursor:"pointer"}}> Log in</span>
                </div>
            </form>
        </div>
    );
};

export default observer(SignUp);