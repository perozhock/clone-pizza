import { cn } from "@/shared/lib";

interface Props {
    name: string;
    details: string;
    className?: string;
}

export const CartItemInfo = ({ name, details, className }: Props) => {
    return (
        <div>
            <div className={cn("flex items-center justify-between", className)}>
                <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
            </div>
            {details && <p className="text-xs text-gray-400">{details}</p>}
        </div>
    );
};
