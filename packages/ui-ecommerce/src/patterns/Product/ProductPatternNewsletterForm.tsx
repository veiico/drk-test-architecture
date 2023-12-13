"use client";

import { useState } from "react";
import { ErrorOption } from "react-hook-form";
import NewsletterForm, { NewsletterFormData } from "../../forms/NewsletterForm/NewsletterForm";

export function ProductPatternNewsletterForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

    const onSubmit = async (
        data: NewsletterFormData,
        setError: (name: keyof NewsletterFormData, error: ErrorOption) => void,
    ) => {
        setIsSubmitting(true);
        setIsSubmittedSuccessfully(false);

        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    const isError = Math.random() > 0.5;

                    if (isError) reject("Something went wrong");

                    resolve(null);
                    setIsSubmitting(false);
                    setIsSubmittedSuccessfully(true);
                }, 1000);
            });
        } catch (error) {
            setIsSubmitting(false);
            setIsSubmittedSuccessfully(false);

            if (typeof error !== "string") return;

            setError("email", { message: error });
        }
    };

    return (
        <NewsletterForm
            onSubmit={onSubmit}
            onReset={() => setIsSubmittedSuccessfully(false)}
            isSubmittedSuccessfully={isSubmittedSuccessfully}
            isSubmitting={isSubmitting}
        />
    );
}
