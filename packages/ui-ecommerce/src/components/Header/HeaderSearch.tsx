export async function HeaderSearch({ title }: { title: string }) {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = response.ok ? ((await response.json()) as { ip: string }) : undefined;

    return (
        <div className="bg-red-400 p-2">
            {data && (
                <p>
                    {title}: {data.ip}
                </p>
            )}
        </div>
    );
}
