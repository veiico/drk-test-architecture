export async function ProductInfo() {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = response.ok ? ((await response.json()) as { ip: string }) : undefined;

    return <div className="bg-green-400 p-2">{data && <p>Your IP: {data.ip}</p>}</div>;
}
