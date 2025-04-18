import React from "react";
import { cn } from "@/shared/lib/utils";
import { CartButton, Container, SearchInput } from ".";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

interface Props {
    className?: string;
}

export const Header = ({ className }: Props) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className="flex items-center justify-between py-8">
                {/* Левая часть */}
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={35}
                            height={35}
                        />
                        <div>
                            <h1 className="text-2xl uppercase font-black">
                                Clone Pizza
                            </h1>
                            <p className="text-sm text-gray-400 leading-3">
                                вкусней есть куда
                            </p>
                        </div>
                    </div>
                </Link>

                <div className="mx-10 flex-1">
                    <SearchInput />
                </div>

                {/* Правая часть */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        className="flex items-stretch gap-1"
                    >
                        <User size={16} />
                        Войти
                    </Button>

                    <CartButton />
                </div>
            </Container>
        </header>
    );
};
