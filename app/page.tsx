import React from "react"
import Link from 'next/link'

function MainPage(): React.ReactNode {
    return (
        <>
            <Link href={'/users'}>Go to users page</Link>
            <br></br>
            <Link href={'/messages'}>Go to messages page</Link>
        </>
    )
}

export default MainPage
