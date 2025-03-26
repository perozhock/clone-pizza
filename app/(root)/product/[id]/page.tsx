import { Container, GroupVariants, PizzaImage, Title } from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params: { id },
}: {
    params: { id: string };
}) {
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
    });

    if (!product) {
        return notFound();
    }
    return (
        <Container className="flex flex-col">
            <div className="flex flex-1">
                <PizzaImage imageUrl={product.imageUrl} size={20} />

                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title
                        text={product.name}
                        size="md"
                        className="font-extrabold mb-1"
                    />
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsam ad aliquid, nulla harum, facere provident eligendi
                        magni quam totam eius consectetur sunt porro. Eos
                        quisquam repellendus iusto. Sapiente, magnam nam.
                    </p>
                </div>
            </div>
        </Container>
    );
}
