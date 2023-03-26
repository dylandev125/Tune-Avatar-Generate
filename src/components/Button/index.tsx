interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button = ({
    className = "",
    onClick,
    children
}: ButtonProps) => {
    return (
        <button className={`${className} hover:bg-[#4143db] hover:text-white w-full rounded-md shadow-md flex items-center justify-center transition-all h-[50px]`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;