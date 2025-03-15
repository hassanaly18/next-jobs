import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req){
    const supabase = createMiddlewareClient({req})

    const {data} = await supabase.auth.getUser();

    if(!data.user && req.nextUrl.pathname !== "/login" && req.nextUrl.pathname !== "/signup"){
        return NextResponse.redirect(new URL("/login", req.url))
    }
}