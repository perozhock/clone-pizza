"use client";

import React from "react";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton, CountButtonProps } from "./count-button";
import { cn } from "@/shared/lib";
import * as CartItemDetails from "./cart-item-details";
import { X } from "lucide-react";

interface Props extends CartItemProps {
    onClickRemove?: () => void;
    onClickCountButton?: CountButtonProps["onClick"];
    className?: string;
}

export const CheckoutItem = ({
    name,
    price,
    imageUrl,
    quantity,
    details,
    disabled,
    className,
    onClickCountButton,
    onClickRemove,
}: Props) => {
    return (
        <div
            className={cn(
                "flex items-center justify-between",
                {
                    "opacity-50 pointer-events-none": disabled,
                },
                className
            )}
        >
            <div className="flex items-center gap-5 flex-1">
                <CartItemDetails.Image src={imageUrl} />
                <CartItemDetails.Info name={name} details={details} />
            </div>

            <CartItemDetails.Price value={price} />

            <div className="flex items-center gap-5 ml-20">
                <CountButton onClick={onClickCountButton} value={quantity} />
                <button type="button" onClick={onClickRemove}>
                    <X
                        className="text-gray-400 cursor-pointer hover:text-gray-500"
                        size={20}
                    />
                </button>
            </div>
        </div>
    );
};
