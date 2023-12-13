import Image from "next/image";
import { ProductInfo } from "../../components";
import { ProductPatternNewsletterForm } from "./ProductPatternNewsletterForm";

export function ProductPattern() {
    return (
        <div className="bg-amber-200">
            <div className="container mx-auto flex items-center justify-between border-b border-black py-16">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="logo" width="200" height="200" />
                </div>

                <div>
                    {/* @ts-expect-error Expected Async Component */}
                    <ProductInfo />
                </div>
            </div>

            <div className="container mx-auto py-16">
                <ProductPatternNewsletterForm />
            </div>
        </div>
    );
}
