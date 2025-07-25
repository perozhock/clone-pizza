import React, { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../../ui";
import { ClearButton } from "../clear-button";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    name: string;
    label?: string;
    required?: boolean;
}

export const FormTextarea = ({
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

    const errorText = errors?.[name]?.message as string;

    const text = watch(name);

    const onClickClear = () => {
        setValue(name, "");
    };

    return (
        <div className={className}>
            <p className="font-medium mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </p>
            <div className="relative">
                <Textarea
                    className="h-12 text-md"
                    {...register(name)}
                    {...props}
                />

                {Boolean(text) && <ClearButton onClick={onClickClear} />}
            </div>

            {errorText && (
                <p className="text-red-500 text-sm mt-2">{errorText}</p>
            )}
        </div>
    );
};
