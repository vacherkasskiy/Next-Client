'use client'

import styles from "./Sidebar.module.css";
import Link from "next/link";
import React from "react";
import {SidebarMenuItem} from "@/shared/models";

interface SidebarProps {
    items: SidebarMenuItem[]
}

function Sidebar({items}: SidebarProps): React.ReactNode {
    return (
        <div className={styles.main_sidebar}>
            {items.map((item, index) =>
                <Link
                    key={index}
                    href={item.href}
                    className={styles.section}
                >
                    <img className={styles.icon} src={item.icon} alt=""/>
                    <p className={styles.name}>{item.text}</p>
                </Link>
            )}
        </div>
    );
}

export default Sidebar;