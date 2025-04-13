import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from ".";
import { Button } from "../ui";

interface Props {
    name: string;
    imageUrl: string;
    price: number;
    loading?: boolean;
    onSubmit?: VoidFunction;
    className?: string;
}

export const ChooseProductForm = ({
    name,
    imageUrl,
    price,
    loading,
    onSubmit,
    className,
}: Props) => {
    return (
        <div className={cn(className, "flex flex-1")}>
            <div className="flex items-center justify-center flex-1 relative w-full">
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]"
                />
            </div>

            <div className="w-[490px] bg-[#fcfcfc] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
                >
                    Добавить за {price}
                </Button>
            </div>
        </div>
    );
};
