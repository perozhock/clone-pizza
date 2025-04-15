"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store";
import React from "react";
import toast from "react-hot-toast";
import { ChoosePizzaForm, ChooseProductForm } from ".";

interface Props {
    product: ProductWithRelations;
    onSubmit?: VoidFunction;
    className?: string;
}

export const ProductForm = ({ product, onSubmit: _onSubmit }: Props) => {
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType);
    const { addCartItem, loading } = useCartStore();

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id;

            await addCartItem({ productItemId: itemId, ingredients });

            toast.success("Успешно добавлено в корзину");

            _onSubmit?.();
        } catch (err) {
            toast.error("Не удалось добавить");
            console.log(err);
        }
    };

    if (isPizzaForm) {
        return (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredients}
                items={product.items}
                onSubmit={onSubmit}
                loading={loading}
            />
        );
    }

    return (
        <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
        />
    );
};
