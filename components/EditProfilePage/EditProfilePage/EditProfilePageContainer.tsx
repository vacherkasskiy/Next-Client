'use client'

import React from "react";
import EditProfilePage from "@/components/EditProfilePage/EditProfilePage/EditProfilePage";
import {useAppSelector} from "@/shared/hooks/redux";
import {EditProfileFormValues} from "@/shared/models";
import {useEditProfileMutation} from "@/shared/api/UsersAPI";
import {useRouter} from "next/navigation";

function EditProfilePageContainer(): React.ReactNode {
    const router = useRouter()
    const user = useAppSelector(state => state.user.currentUser)
    const [editProfile, {}] = useEditProfileMutation()

    const handleOnSubmit = async (values: EditProfileFormValues, setFieldError: (field: string, msg: string) => void) => {
        const response = await editProfile(values)
        if ('error' in response && 'originalStatus' in response.error) {
            switch (response.error.originalStatus) {
                case 400:
                    setFieldError('email', 'Email already in use')
                    break
                case 403:
                    setFieldError('image', 'Invalid image link')
                    break
                case 200:
                    if (user) router.push(`/users/${user.id}`)
            }
        }
    }

    return (
        <>
            {user && <EditProfilePage
                user={user}
                onSubmitCallback={handleOnSubmit}
            />}
        </>
    )
}

export default EditProfilePageContainer