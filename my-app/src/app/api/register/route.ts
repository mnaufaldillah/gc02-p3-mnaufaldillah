import { getUserByEmail, getUserByUsername, registerUser } from "@/db/models/user";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
    name: z.string().optional(),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(5)
})

interface UserRegister {
    name: string;
    username: string;
    email: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        // console.log(request, `<--------- request`);
        
        const body : UserRegister = await request.json();

        // console.log(body, `<---------- Body`);
        

        const parsedData = User.safeParse(body);

        if (!parsedData.success) {
            throw parsedData.error;
        };

        const foundUserByUsername = await getUserByUsername(body.username);

        if(foundUserByUsername) {
            throw { name: "UniqueUsername" }
        }

        const foundUserByEmail = await getUserByEmail(body.email);

        if(foundUserByEmail) {
            throw { name: "UniqueEmail" }
        }

        const newUser = await registerUser(body);

        return NextResponse.json(newUser, {
            status: 201
        });
    } catch (error: any) {
        // console.log(error, `<--------- error`);
        if(error instanceof z.ZodError) {
            // console.log(error.issues);
            
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
        
        if (error.name === "UniqueUsername") {
            return NextResponse.json(
                {
                    message: `Username must be unique`
                },
                {
                    status: 400
                }
            )
        }

        if (error.name === "UniqueEmail") {
            return NextResponse.json(
                {
                    message: `Email must be unique`
                },
                {
                    status: 400
                }
            )
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