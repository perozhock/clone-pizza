import { useEffect } from "react";
import { useCartStore } from "../store";
import { CartStateItem } from "../lib";
import { CreateCartItemValues } from "../services/dto/cart.dto";

type ReturnProps = {
    totalAmount: number;
    items: CartStateItem[];
    loading: boolean;
    updateItemQuantity: (id: number, quantity: number) => void;
    removeCartItem: (id: number) => void;
    addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
    // TODO: Check other variants в 20250408a useCartStore
    const cartState = useCartStore();

    useEffect(() => {
        cartState.fetchCartItems();
    }, [cartState.fetchCartItems]);

    return cartState;
};
