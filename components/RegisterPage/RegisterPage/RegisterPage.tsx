'use client'

import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import styles from './RegisterPage.module.css'

interface formFields {
    name: string
    username: string
    email: string
    password: string
    repeatPassword: string
}

export default function RegisterPage(): React.ReactNode {
    return (
        <Formik
            initialValues = {{
                name: "",
                username: "",
                email: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                        .min(4, "Name must contain at least 4 letters")
                        .max(20, "Name must contain no more than 20 letters")
                        .required('Name is required'),
                    username: Yup.string()
                        .min(4, "Username must contain at least 4 letters")
                        .max(20, "Username must contain no more than 20 letters")
                        .required('Username is required'),
                    email: Yup.string()
                        .email("Invalid email address")
                        .required("Email address is required"),
                    password: Yup.string()
                        .min(6, "Password must contain at least 6 letters")
                        .required("Password is required"),
                    repeatPassword: Yup.string()
                        .oneOf([Yup.ref('password')], "Passwords must match")
                        .required("Password is required"),
                })
            }
            onSubmit={(values, {setFieldError}) => {
                axios.post("https://localhost:7072/auth/register", values)
                    .then(response => {
                        console.log("Success", response.data);
                        window.location.href = "http://localhost:3000/users";
                    })
                    .catch(() => {
                        console.log("Failure");
                        setFieldError("email", "User with such email already exists");
                    });
            }}
        >
            <div className={styles.login_page}>
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
            </div>
        </Formik>
    );
}