import { redirect } from 'react-router';
export async function loginAction({ request }) {
    const formData = await request.formData();
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData
    },
    );
    if (res.ok) {
        const token = (await res.json()).access_token;
        localStorage.setItem('token', token);
        throw redirect('/');
        //return null;
    }
    throw new Response(res.statusText, { status: res.status });
}