import React, { InputHTMLAttributes } from "react";
import { ClearButton, ErrorText, RequiredSymbol } from "..";
import { Input } from "../../ui";
import { useFormContext } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormInput = ({
    className,
    name,
    label,
    required,
    ...props
}: Props) => {
    const {
        register,
        formState: { errors },
        watch,
        setValue,
    } = useFormContext();

    const value = watch(name);
    const errorText = errors[name]?.message as string;

    const onClickClear = () => {
        setValue(name, "", { shouldValidate: true });
    };

    return (
        <div className={className}>
            {label && (
                <p className="font-medium mb-2">
                    {label} {required && <RequiredSymbol />}
                </p>
            )}

            <div className="relative">
                <Input
                    className="h-12 text-md"
                    {...register(name)}
                    {...props}
                />

                <ClearButton onClick={onClickClear} />
            </div>

            <ErrorText text={errorText} className="mt-2" />
        </div>
    );
};
