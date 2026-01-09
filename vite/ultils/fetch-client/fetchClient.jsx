export async function fetchClient(url,body, method = 'GET', headers = {}) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            ...headers
        },
        // body: body ? JSON.stringify(body) : null
        body: body ? body : null
    });
    return response;
}