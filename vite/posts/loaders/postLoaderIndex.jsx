import { clientFetch } from "../../ultils/client-fetch/clientFetch";

export async function postLoaderIndex() {
    const res = await clientFetch("/api/posts");
    if (res.ok) return res.json();
    throw new Response(res.statusText, { status: res.status });
}