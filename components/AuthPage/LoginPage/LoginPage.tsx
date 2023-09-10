'use client'

import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import styles from '../AuthPage.module.css'
import {useLoginMutation} from "@/shared/api/AuthAPI";

export default function LoginPage(): React.ReactNode {
    const [login, {
        data,
        error
    }] = useLoginMutation()

    const handleOnSubmit = async (values: any, setFieldError: (field: string, message: string) => void) => {
        const response = await login(values)
        if (error && 'error' in response && 'data' in response.error) {
            switch (response.error.data) {
                case 'Wrong email':
                    setFieldError('email', 'Wrong email')
                    break
                case 'Wrong password':
                    setFieldError('password', 'Wrong password')
                    break
            }
        }
    }

    return (
        <Formik
            initialValues = {{
                email: "",
                password: "",
            }}
            validationSchema = {
                Yup.object({
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email address is required"),
                    password: Yup.string()
                        .min(6, "At least 6 letters")
                        .required("Password is required"),
                })
            }
            onSubmit = {async (values, {setFieldError}) => {
                await handleOnSubmit(values, setFieldError)
            }}
        >
            <Form className={styles.form}>
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
                <button className={styles.submit_btn} type={"submit"}>login</button>
            </Form>
        </Formik>
    );
}