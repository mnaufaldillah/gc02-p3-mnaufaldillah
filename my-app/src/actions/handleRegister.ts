"use server"

import { BASE_URL } from "@/constants";
import { redirect } from "next/navigation";

export const handleRegister = async (formData: FormData) => {
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch(BASE_URL + "/api/register", {
        method: "POST",
        body: JSON.stringify({ name, username, email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const result = (await res.json());

    if(!res.ok) {
        // console.log(result, `<----------- result`);
        
        return redirect('/register?error=' + result.message)
    };

    return redirect('/login')
}