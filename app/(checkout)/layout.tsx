import { Container, Header } from "@/shared/components/shared";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Clone Pizza | Корзина",
    description: "Тут оформление заказа",
};

export default function CheckoutLayout({ children }: { children: ReactNode }) {
    return (
        <main className="min-h-screen bg-[#f4f1ee]">
            <Container>
                <Header
                    hasSearch={false}
                    hasCart={false}
                    className="border-b-gray-200"
                />
                {children}
            </Container>
        </main>
    );
}
