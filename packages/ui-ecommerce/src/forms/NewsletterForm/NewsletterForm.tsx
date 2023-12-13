"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorOption, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../components/Input/Input";
import { newsletterFormSchema } from "./schema";

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;

type Props = {
    defaultValues?: NewsletterFormData;
    onSubmit: (
        data: NewsletterFormData,
        setError: (name: keyof NewsletterFormData, error: ErrorOption) => void,
    ) => void;
    onReset?: () => void;
    isSubmitting?: boolean;
    isSubmittedSuccessfully?: boolean;
};

export default function NewsletterForm({
    defaultValues,
    onSubmit,
    onReset,
    isSubmitting,
    isSubmittedSuccessfully,
}: Props) {
    const form = useForm<NewsletterFormData>({
        resolver: zodResolver(newsletterFormSchema),
        defaultValues: defaultValues ?? {
            email: "",
        },
    });

    const handleSubmit = async (data: NewsletterFormData) => {
        onSubmit(data, form.setError);
    };

    if (isSubmittedSuccessfully) {
        return (
            <div>
                <p className="mb-4">Thank you for subscribing to our newsletter!</p>

                <button
                    type="button"
                    className="mx-auto rounded !bg-slate-400 px-4 py-1"
                    onClick={onReset}
                >
                    Back
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-64" noValidate>
            <Input
                {...form.register("email")}
                type="email"
                placeholder="E-Mail"
                autoComplete="email"
                required
                disabled={isSubmitting}
                error={form.formState.errors.email?.message}
                containerProps={{ className: "mb-4" }}
            />

            <button
                type="submit"
                className="inline-block rounded !bg-slate-400 px-4 py-1"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting" : "Register to Newsletter"}
            </button>
        </form>
    );
}
