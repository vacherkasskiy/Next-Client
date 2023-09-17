'use client'

import React from "react";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {User} from "@/models";
import styles from "./EditProfileForm.module.scss";
import {MyButton} from "@/components/ui";
import {EditProfileFormValues} from "@/shared/models";

interface EditProfileFormProps {
    user: User
    onSubmitCallback: (values: EditProfileFormValues,
                       setFieldError: (field: string, msg: string) => void) => void
}

function EditProfileForm({user, onSubmitCallback}: EditProfileFormProps): React.ReactNode {
    const initialValues: EditProfileFormValues = {
        image: user.image,
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.city,
        website: user.website,
    }

    const fields = Object.keys(initialValues)

    return (
        <>
            <Formik
                initialValues = { initialValues }
                validationSchema = {
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
                        city: Yup.string()
                            .max(20, 'No more than 20 letters')
                            .nullable(),
                        website: Yup.string()
                            .nullable(),
                    })
                }
                onSubmit = {async (values, {setFieldError}) => {
                    await onSubmitCallback(values, setFieldError)
                }}
            >
                <Form className={styles.form}>
                    <div className={styles.fields}>
                        {fields.map((x, index) => (
                            <div className={styles.section} key={index}>
                                <label className={styles.name} htmlFor={x}>{x}</label>
                                <Field as={"input"} name={x} type={"text"} />
                                <div className={styles.error}>
                                    <ErrorMessage name={x}/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <MyButton
                        text={'SAVE'}
                        theme={'dark'}
                        typeProperty={'submit'}
                        size={'l'}
                    />
                </Form>
            </Formik>
        </>
    )
}

export default EditProfileForm