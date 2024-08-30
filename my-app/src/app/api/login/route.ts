import { comparePassword } from "@/db/helpers/bcrypt";
import { signToken } from "@/db/helpers/jwt";
import { getUserByEmail } from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
    email: z.string().email(),
    password: z.string().min(5)
});

interface UserLogin {
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const body : UserLogin = await request.json();

        const validation = User.safeParse(body);

        if(!validation.success) {
            throw validation.error;
        }

        const foundUser = await getUserByEmail(body.email);

        if(!foundUser) {
            throw { await: "Unauthorized" }
        }

        const isValidPassword = comparePassword(body.password, foundUser.password);

        if(!isValidPassword) {
            throw { await: "Unauthorized"}
        }

        const access_token = signToken({
            _id: foundUser._id,
            username: foundUser.username,
            email: foundUser.email
        });

        const response = NextResponse.json({
            access_token
        });
    } catch (error: any) {
        if(error instanceof z.ZodError) {
            console.log(error.issues);
            
            const errorPath = error.issues[0].path[0];
            const errorMessage = error.issues[0].message;

            return NextResponse.json(
                {
                    message: `${errorPath} ${errorMessage}`
                }, 
                {
                    status: 400
                }
            );
        }

        if (error.name === "Unauthorized") {
            return NextResponse.json({

            })
        }

        return NextResponse.json(
            {
                message: `Internal Servel Error`
            }, 
            {
                status: 500
            }
        );
    }
}