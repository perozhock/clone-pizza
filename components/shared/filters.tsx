"use client";

import React, { useCallback } from "react";
import { CheckboxFiltersGroup, RangeSlider, Title } from ".";
import { Input } from "../ui";
import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface Props {
    className?: string;
}

export const Filters = ({ className }: Props) => {
    const { ingredients, loading } = useIngredients();
    const filters = useFilters();

    useQueryFilters(filters);

    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }));

    const updatePrices = (prices: number[]) => {
        filters.setPrice( 'priceFrom', prices[0] )
        filters.setPrice( 'priceTo', prices[1] )
    };

    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <CheckboxFiltersGroup
                title="Тип теста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    { text: "Тонкое", value: "1" },
                    { text: "Традиционное", value: "2" },
                ]}
            />

            <CheckboxFiltersGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    { text: "20 см", value: "20" },
                    { text: "30 см", value: "30" },
                    { text: "40 см", value: "40" },
                ]}
            />

            <div className="mt-5 border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(filters.price.priceFrom)}
                        onChange={(e) =>
                            filters.setPrice(
                                "priceFrom",
                                Number(e.target.value)
                            )
                        }
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="1000"
                        value={String(filters.price.priceTo)}
                        onChange={(e) =>
                            filters.setPrice("priceTo", Number(e.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[
                        filters.price.priceFrom || 0,
                        filters.price.priceTo || 1000,
                    ]}
                    onValueChange={updatePrices}
                />
            </div>

            <CheckboxFiltersGroup
                title="Ингредиенты"
                name="ingredients"
                className="mt-5"
                limit={5}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
            />
        </div>
    );
};
