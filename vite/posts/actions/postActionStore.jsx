import { clientFetch } from "../../ultils/client-fetch/clientFetch";

export async function postActionStore({ request }) {
  const formData = await request.formData();
    const res = await clientFetch("/api/posts", "POST", formData);
    if (res.ok) return res.json();
    throw new Response(res.statusText, { status: res.status });
}