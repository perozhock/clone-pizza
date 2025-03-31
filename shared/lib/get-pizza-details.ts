import { ProductItem, Ingredient } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrice(
        type,
        size,
        items,
        ingredients,
        selectedIngredients
    );

    const textDetails = `${size} см, ${mapPizzaType[type]} тесто`;

    return { totalPrice, textDetails };
};
