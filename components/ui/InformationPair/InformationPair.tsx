import React from "react";
import style from './InformationPair.module.css'

interface InformationPairProps {
    property: string
    value: string
}

export default function InformationPair({property, value}: InformationPairProps): React.ReactNode {
    return (
        <div className={style.information_pair}>
            <p className={style.property}>{property}:</p>
            <p className={style.value}>{value}</p>
        </div>
    )
}