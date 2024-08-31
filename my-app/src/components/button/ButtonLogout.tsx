"use client"

import { handleLogout } from "@/actions/handleLogout"

export default function ButtonLogout() {
    const clickLogout = () => {
        handleLogout()
    }
    
    return (
        <button onClick={clickLogout} className="btn btn-neutral">Logout</button>
    )
}