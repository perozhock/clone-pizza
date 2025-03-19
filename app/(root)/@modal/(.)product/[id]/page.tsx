import {
    Container,
    GroupVariants,
    ProductImage,
    Title,
} from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductModalPage({
    params: { id },
}: {
    params: { id: string };
}) {
    return <h1>12121212</h1>;
}
