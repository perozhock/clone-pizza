import { cn } from "@/shared/lib";
import React, { ReactNode } from "react";

interface Props {
    title?: ReactNode;
    value?: ReactNode;
    className?: string;
}

export const CheckoutItemDetails = ({ title, value, className }: Props) => {
    return (
        <div className={cn("flex my-4", className)}>
            <span className="flex flex-1 text-lg text-neutral-500">
                {title}
            </span>

            <span className="font-bold text-lg">{value}</span>
        </div>
    );
};
