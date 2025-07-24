"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCart } from "@/shared/hooks";
import {
    CheckoutSidebar,
    Container,
    Title,
    CheckoutAddressForm,
    CheckoutCart,
    CheckoutPersonalForm,
} from "@/shared/components";
import { checkoutFormSchema, checkoutFormValues } from "@/shared/constants";
import { cn } from "@/shared/lib";

export default function CheckoutPage() {
    const { totalAmount, items, updateItemQuantity, removeCartItem, loading } =
        useCart();

    const form = useForm<checkoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "",
            address: "",
            comment: "",
        },
    });

    const onSubmit = (data: checkoutFormValues) => {};

    const onClickCountButton = (
        id: number,
        quantity: number,
        type: "plus" | "minus"
    ) => {
        const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return (
        <Container className="mt-10">
            <Title
                text="Оформление заказа"
                className="font-extrabold mb-8 text-[36px]"
            />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <CheckoutCart
                                onClickCountButton={onClickCountButton}
                                removeCartItem={removeCartItem}
                                items={items}
                                loading={loading}
                            />

                            <CheckoutPersonalForm
                                className={
                                    loading ?
                                        "opacity-40 pointer-events-none"
                                    :   ""
                                }
                            />

                            <CheckoutAddressForm
                                className={
                                    loading ?
                                        "opacity-40 pointer-events-none"
                                    :   ""
                                }
                            />
                        </div>

                        <div className="w-[450px]">
                            <CheckoutSidebar
                                totalAmount={totalAmount}
                                loading={loading}
                            />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    );
}
