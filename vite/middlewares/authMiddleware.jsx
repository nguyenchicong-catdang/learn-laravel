import { redirect } from "react-router"

// https://reactrouter.com/how-to/middleware#server-vs-client-middleware
export async function authMiddleware({request}, next) {
    const token = localStorage.getItem('token')
    if (!token) throw redirect('login');
    return await next();
}