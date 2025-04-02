"use client";

import React from "react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";

interface Props {
    className?: string;
}

export const CartDrawer = ({
    children,
    className,
}: React.PropsWithChildren<Props>) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                <SheetHeader>
                    <SheetTitle>
                        В корзине <span className="font-bold">5 товаров </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
                    <div className="mb-2">
                        <CartDrawerItem
                            id={0}
                            imageUrl={""}
                            details={""}
                            name={""}
                            price={0}
                            quantity={0}
                        />
                    </div>
                </div>

                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                                Итого
                                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                            </span>

                            <span className="font-bold text-lg">500 RUB</span>
                        </div>

                        <Link href="/cart">
                            <Button
                                type="submit"
                                className="w-full h-12 text-base"
                            >
                                Оформить заказ
                                <ArrowRight className="w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
