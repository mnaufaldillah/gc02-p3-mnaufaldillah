"use server"

import { BASE_URL } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const handleLogin = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(BASE_URL + "/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = (await res.json());

    if(!res.ok) {
        // console.log(result, `<----------- result`);
        
        return redirect('/login?error=' + result.message)
    };

    cookies().set('Authorization', `Bearer ${result.access_token}`);

    return redirect('/')
}