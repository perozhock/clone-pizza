import {
    Container,
    Filters,
    ProductCard,
    ProductsGroupList,
    Title,
    TopBar,
} from "@/components/shared";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title text="Пиццовое" size="lg" className="font-extrabold" />
            </Container>
            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList title="Питсы" items={[{
                                id: 1,
                                name: "Чизбаго-питса",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
                                price: 650,
                                items: [{ price: 650 }]
                            }]} categoryId={1} />
                            <ProductsGroupList title="Комбо" items={[{
                                id: 1,
                                name: "Две питсы",
                                imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7e21971194ba8cd8a49301256fc4.avif',
                                price: 1000,
                                items: [{ price: 1000 }]
                            }]} categoryId={2} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
