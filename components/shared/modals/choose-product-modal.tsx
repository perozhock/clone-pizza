"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Product } from "@prisma/client";
import { Title } from "../title";
import React from "react";
import { useRouter } from "next/navigation";

interface Props {
    product: Product;
    className?: string;
}

export const ChooseProductModal = ({ product, className }: Props) => {
    const router = useRouter();

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                    className
                )}
            >
                <Title text={product.name} />
            </DialogContent>
        </Dialog>
    );
};
