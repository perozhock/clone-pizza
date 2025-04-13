import { useEffect } from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();
    
    useEffect(() => {
        const params = {
            ...filters.price,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        };

        const newQuery = qs.stringify(params, { arrayFormat: "comma" });

        if (window.location.search !== `?${newQuery}` && newQuery !== '') {
            router.replace(`?${newQuery}`, { scroll: false });
        }
    }, [filters]);
};
