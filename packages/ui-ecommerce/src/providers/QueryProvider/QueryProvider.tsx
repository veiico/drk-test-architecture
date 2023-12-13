"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function QueryProvider({ children }: Props) {
    const [queryClient] = useState(
        () => new QueryClient({ defaultOptions: { queries: { staleTime: 10000 } } }),
    );

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
