'use client';

import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
    onChange?: (value?: string) => void;
}

export const AddressInput = ({ onChange }: Props) => {
    const token = String(process.env.ADDRESS_API_KEY);
    console.log(token);

    return (
        <AddressSuggestions
            token='c7284bdf367c4b371568ae819bec31f1fea187b3'
            onChange={(data) => onChange?.(data?.value)}
        />
    );
};
