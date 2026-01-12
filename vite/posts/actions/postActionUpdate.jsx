import { redirect } from "react-router";
import { clientFetch } from "../../ultils/client-fetch/clientFetch";

export async function postActionUpdate({request, params}) {
    const fomrData = await request.formData();
    const res = await clientFetch(`/api/posts/${params.id}`, "POST", fomrData, { 'X-HTTP-Method-Override': "PUT" });
    // if (res.ok) throw redirect(`/posts/${params.id}`);
    if (res.ok) return { success: true };
    if (res.status === 422) return res.json();
    throw new Response(res.statusText, { status: res.status });
}