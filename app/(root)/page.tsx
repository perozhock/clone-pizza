import {
    Container,
    Filters,
    ProductsGroupList,
    Title,
    TopBar,
} from "@/shared/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { Suspense } from "react";
import { findPizzas, GetSearchParams } from "@/shared/lib";

export default async function Home({searchParams}: {searchParams: GetSearchParams}) {
    const categories = await findPizzas(searchParams);

    return (
        <>
            <Container className="mt-10">
                <Title text="Пиццовое" size="lg" className="font-extrabold" />
            </Container>
            <TopBar
                categories={categories.filter(
                    (category) => category.products.length > 0
                )}
            />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters />
                        </Suspense>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map(
                                (category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            categoryId={category.id}
                                            items={category.products}
                                        />
                                    )
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
