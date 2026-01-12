import { clientFetch } from "../../ultils/client-fetch/clientFetch";

export async function postLoaderShowId({ params }) {
    const res = await clientFetch(`/api/posts/${params.id}`);
    if (res.ok) return res.json();
        if (res.status === 404) return { data: null };

    throw new Response(res.statusText, { status: res.status });
}