import { type ReactNode, type FC } from "react";

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
    const buttonClasses = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className ? className : ''}`;

    return (
        <button className={buttonClasses} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
