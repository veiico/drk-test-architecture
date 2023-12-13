import { cn } from "@acme/core";
import { forwardRef, type HTMLAttributes, type InputHTMLAttributes, type Ref } from "react";

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    containerProps?: HTMLAttributes<HTMLDivElement>;
    error?: string;
};

function Input({ error, containerProps, ...props }: Props, ref: Ref<HTMLInputElement>) {
    return (
        <div {...containerProps} className={cn("relative", containerProps?.className)}>
            <input
                {...props}
                ref={ref}
                id={props.name}
                className={cn("h-10 w-full rounded-sm border px-2 shadow-md", {
                    "opacity-50": props.disabled,
                })}
            />

            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
}

export default forwardRef<HTMLInputElement, Props>(Input);
