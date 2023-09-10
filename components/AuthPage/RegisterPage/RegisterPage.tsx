'use client'

import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import styles from '../AuthPage.module.css'
import {useRegisterMutation} from "@/shared/api/AuthAPI";

export default function RegisterPage(): React.ReactNode {
    const [register, {}] = useRegisterMutation()

    return (
        <Formik
            initialValues={{
                name: "",
                username: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(4, "At least 4 letters")
                        .max(20, "No more than 20 letters")
                        .required('Name is required'),
                    username: Yup.string()
                        .min(4, "At least 4 letters")
                        .max(20, "No more than 20 letters")
                        .required('Username is required'),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email address is required"),
                    password: Yup.string()
                        .min(6, "At least 6 letters")
                        .required("Password is required"),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password')], "Passwords must match")
                        .required("Password is required"),
                })
            }
            onSubmit={async (values, {setFieldError}) => {
                const response = await register({
                    name: values.name,
                    username: values.username,
                    email: values.email,
                    password: values.password
                });
                if ('error' in response && 'data' in response.error) {
                    setFieldError('email', 'Email is already in use')
                }
            }}
        >
            <Form className={styles.form}>
                <div className={styles.section}>
                    <label className={styles.name} htmlFor="name">Name</label>
                    <Field as={"input"} name={"name"} type={"text"} placeholder={'Name'}/>
                    <div className={styles.error}>
                        <ErrorMessage name={"name"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <label className={styles.name} htmlFor="username">Username</label>
                    <Field as={"input"} name={"username"} type={"text"} placeholder={'Username'}/>
                    <div className={styles.error}>
                        <ErrorMessage name={"username"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <label className={styles.name} htmlFor="email">Email</label>
                    <Field name={"email"} type={"email"} placeholder={'Example@ex.com'}/>
                    <div className={styles.error}>
                        <ErrorMessage name={"email"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <label className={styles.name} htmlFor="password">Password</label>
                    <Field name={"password"} type={"password"}/>
                    <div className={styles.error}>
                        <ErrorMessage name={"password"}/>
                    </div>
                </div>
                <div className={styles.section}>
                    <label className={styles.name} htmlFor="repeatPassword">Repeat password</label>
                    <Field name={"repeatPassword"} type={"password"}/>
                    <div className={styles.error}>
                        <ErrorMessage name={"repeatPassword"}/>
                    </div>
                </div>
                <button className={styles.submit_btn} type={"submit"}>register</button>
            </Form>
        </Formik>
    );
}