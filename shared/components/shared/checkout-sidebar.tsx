import { Package, Percent, Truck, ArrowRight } from "lucide-react";
import React from "react";
import { Button, Skeleton } from "../ui";
import { CheckoutItemDetails, WhiteBlock } from ".";
import { cn } from "@/shared/lib";

const VAT = 15;
const DELIVERY_PRICE = 250;

interface Props {
    totalAmount: number;
    loading?: boolean;
    className?: string;
}

export const CheckoutSidebar = ({ totalAmount, loading, className }: Props) => {
    const totalPrice = totalAmount + VAT + DELIVERY_PRICE;
    return (
        <WhiteBlock className={cn("p-6 sticky top-4", className)}>
            <div className="flex flex-col gap-1">
                <span className="text-xl">Итого:</span>
                {loading ?
                    <Skeleton className="w-24 h-8" />
                :   <span className="h-11 text-[34px] font-extrabold">
                        {`${totalPrice} руб.`}
                    </span>
                }
            </div>

            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Package size={18} className="mr-2 text-gray-300" />
                        Стоимость товаров:
                    </div>
                }
                value={
                    loading ?
                        <Skeleton className="h-6 w-16" />
                    :   `${totalAmount} руб.`
                }
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Percent size={18} className="mr-2 text-gray-300" />
                        Сервисный сбор:
                    </div>
                }
                value={
                    loading ? <Skeleton className="h-6 w-16" /> : `${VAT} руб.`
                }
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Truck size={18} className="mr-2 text-gray-300" />
                        Доставка:
                    </div>
                }
                value={
                    loading ?
                        <Skeleton className="h-6 w-16" />
                    :   `${DELIVERY_PRICE} руб.`
                }
            />

            <Button
                type="submit"
                className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
            >
                Перейти к оплате
                <ArrowRight className="w-5 ml-2" />
            </Button>
        </WhiteBlock>
    );
};
