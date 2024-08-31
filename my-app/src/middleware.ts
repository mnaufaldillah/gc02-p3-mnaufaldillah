import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./db/helpers/jwt";

export async function middleware(request: NextRequest) {
    // console.log(`Masuk Middleware`);
    
    if(request.url.includes('api/wishlists')) {
        const authorization = cookies().get("Authorization");
        // console.log(authorization, `<----- authorization`);
        
        if(!authorization) {
            return NextResponse.json({
                message: `Authentication Failed`
            }, {
                status: 401
            });
        }

        const access_token = authorization.value.split(" ")[1];

        const decoded = await verifyToken<{ _id: string, username: string, email: string}>(access_token);

        const requestHeaders = new Headers(request.headers);

        requestHeaders.set('x-user-id', decoded._id);
        requestHeaders.set('x-user-username', decoded.username);
        requestHeaders.set('x-user-email', decoded.email);

        const response = NextResponse.next({
            request: {
                headers: requestHeaders
            }
        });

        return response;
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*',
}