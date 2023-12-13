import { cn } from "@acme/core";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
    rightSlot?: (title: string) => React.ReactNode | Promise<React.ReactNode>;
};

export async function Header({ rightSlot, ...props }: Props) {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = response.ok ? ((await response.json()) as { ip: string }) : undefined;
    const title = "Test title";

    return (
        <header {...props} className={cn("bg-slate-400", props?.className)}>
            <div className="container mx-auto flex h-20 items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="logo" width="60" height="60" />

                    {data && <p>Your IP: {data.ip}</p>}
                </div>

                <div>{(await rightSlot?.(title)) || <div>Default</div>}</div>
            </div>
        </header>
    );
}
