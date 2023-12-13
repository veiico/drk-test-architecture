import { Header, HeaderSearch, QueryProvider } from "@acme/ui-ecommerce";
import "@acme/ui-ecommerce/styles.css";
import { Inter } from "next/font/google";
import "~/styles/globals.css";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function Layout(props: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={["font-sans", fontSans.variable].join(" ")}>
                <QueryProvider>
                    <Header rightSlot={(title) => <HeaderSearch title={title} />} />

                    {props.children}
                </QueryProvider>
            </body>
        </html>
    );
}
