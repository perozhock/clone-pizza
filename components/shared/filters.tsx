import React from "react";
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

            <div className="mt-5 border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        defaultValue={0}
                    />
                    <Input
                        type="number"
                        min={100}
                        max={1000}
                        placeholder="1000"
                    />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup
                title="Ингридиенты"
                className="mt-5"
                limit={5}
                defaultItems={[
                    {
                        text: "Совас",
                        value: "3",
                    },
                    {
                        text: "Моцареловое",
                        value: "4",
                    },
                    {
                        text: "Чесноковое",
                        value: "5",
                    },
                    {
                        text: "Огурковое",
                        value: "6",
                    },
                    {
                        text: "Луковое",
                        value: "7",
                    },
                    {
                        text: "Помидоровое",
                        value: "8",
                    },
                ]}
                items={[
                    {
                        text: "Совас",
                        value: "3",
                    },
                    {
                        text: "Моцареловое",
                        value: "4",
                    },
                    {
                        text: "Чесноковое",
                        value: "5",
                    },
                    {
                        text: "Огурковое",
                        value: "6",
                    },
                    {
                        text: "Луковое",
                        value: "76",
                    },
                    {
                        text: "Помидоровое",
                        value: "7",
                    },
                ]}
            />
        </div>
    );
};
