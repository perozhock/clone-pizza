import { cn } from "@/shared/lib/utils";
import React from "react";
import { Title } from ".";
import { Button } from "../ui";

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm = ({
    name,
    imageUrl,
    onClickAdd,
    className,
}: Props) => {
    const textDetails = "lorem";
    const totalPrice = 350;
    const size = 30;

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

                <p className="text-gray-400">{textDetails}</p>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить за {totalPrice}
                </Button>
            </div>
        </div>
    );
};
