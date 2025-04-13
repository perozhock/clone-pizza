"use client";

import { Dialog, DialogContent } from "@/shared/components/ui/dialog";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);
    const { addCartItem, loading } = useCartStore();

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({ productItemId: itemId, ingredients });
            toast.success("Успешно добавлено в корзину");
            router.back();
        } catch (err) {
            toast.error("Не удалось добавить");
            console.log(err);
        }
    };

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] max-h-[700px] bg-white overflow-auto",
                    className
                )}
            >
                {isPizzaForm ?
                    <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredients}
                        items={product.items}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
                :   <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={firstItem.price}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
                }
            </DialogContent>
        </Dialog>
    );
};
