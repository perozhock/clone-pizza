import { cn } from "@/shared/lib";
import React from "react";

interface Props {
    text: string;
    className?: string;
}

export const ErrorText = ({ text, className }: Props) => {
    return <p className={cn("text-red-400 text-sm", className)}>{text}</p>;
};
