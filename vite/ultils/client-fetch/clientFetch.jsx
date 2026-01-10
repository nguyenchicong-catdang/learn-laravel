export async function clientFetch(url, method = "GET", body = null, headers = {}) {
    const response = await fetch(url, {
        method: method,
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            ...headers,
        },
        // body: body ? JSON.stringify(body) : null
        body: body
    });
    return response;
}