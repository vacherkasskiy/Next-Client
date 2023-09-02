import React from "react";
import {Mock} from "@/components/ui";
import styles from './DialogsList.module.css'

export default function DialogsListMock(): React.ReactNode {
    return (
        <div className={styles.dialogs_list}>
            {Array(10).fill(null).map((_, index) =>
                <div className={styles.link_wrapper}>
                    <Mock key={index} borderRadius={'5px'}/>
                </div>
            )}
        </div>
    )
}