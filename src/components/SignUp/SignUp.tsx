import React, {useContext} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './SignUp.module.css'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
const schema = z.object({
    username:z.string(),
    email: z.string().email(),
    password: z.string().min(4)
})

type FormFields = z.infer<typeof schema>
const SignUp = () => {
    const {userStore} = useContext(Context)
    const {register, handleSubmit, setError, formState: {errors,isSubmitting}} = useForm<FormFields>({resolver:zodResolver(schema)})
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        userStore.registration(data.username,data.email, data.password)
    }
    return (
        <form className={styles.signup__wrapper} onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit" disabled={isSubmitting}>{isSubmitting? 'Loading...' : 'Sign up'}</button>
        </form>
    );
};

export default observer(SignUp);