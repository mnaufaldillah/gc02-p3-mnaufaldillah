"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogout = async () => {
    if(cookies().get('Authorization')) {
        cookies().delete('Authorization');
    }

    redirect('/')
}