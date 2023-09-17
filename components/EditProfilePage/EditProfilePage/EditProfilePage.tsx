import React from "react";
import {User} from "@/models";
import styles from './EditProfilePage.module.scss'
import {EditProfileForm, ProfilePreview} from "@/components/EditProfilePage";
import {EditProfileFormValues} from "@/shared/models";

interface EditProfilePageProps {
    user: User
    onSubmitCallback: (values: EditProfileFormValues,
                       setFieldError: (field: string, msg: string) => void) => void
}

function EditProfilePage({user, onSubmitCallback}: EditProfilePageProps): React.ReactNode {
    return (
        <div className={styles.edit_page}>
            <div className={styles.form_wrapper}>
                <ProfilePreview user={user} />
                <EditProfileForm
                    user={user}
                    onSubmitCallback={onSubmitCallback}
                />
            </div>
        </div>
    )
}

export default EditProfilePage