import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from './Login.module.css'
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

type FormFields = z.infer<typeof schema>
const Login = () => {
    const {register, handleSubmit, setError, formState: {errors,isSubmitting}} = useForm<FormFields>({resolver:zodResolver(schema)})
    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)
    }
    return (
        <form className={styles.login__wrapper} onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;