import React from "react";
import { ErrorText, FormTextarea, WhiteBlock } from "..";
import { Input, Textarea } from "../../ui";
import { AddressInput } from "../address-input";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
    className?: string;
}

export const CheckoutAddressForm = ({ className }: Props) => {
    const { control } = useFormContext();

    return (
        <WhiteBlock title="3. Адрес доставки" className={className}>
            <div className="flex flex-col gap-5">
                <Controller
                    control={control}
                    name="address"
                    render={({ field, fieldState }) => (
                        <>
                            <AddressInput onChange={field.onChange} />
                            {fieldState.error?.message && (
                                <ErrorText text={fieldState.error.message} />
                            )}
                        </>
                    )}
                />
                <FormTextarea
                    name="comment"
                    className="text-balance"
                    placeholder="Комментарий к заказу"
                    rows={5}
                />
            </div>
        </WhiteBlock>
    );
};
