import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    url?: string;
    variant?: 'primary' | 'secondary';
}

const Button = ({ text, url, variant = 'primary' }: ButtonProps) => {
    const baseStyles = 'text-black px-4 py-2 rounded-md';
    const variants = {
        primary: 'bg-blue-300',
        secondary: 'bg-gray-300',
    };

    if (url) {
        return (
            <Link
                to={url}
                className={`${baseStyles} ${variants[variant]}`}
            ></Link>
        );
    }
    return (
        <>
            <button
                className={`${baseStyles} ${variants[variant]}`}
                type="button"
            >
                {text}
            </button>
        </>
    );
};
export default Button;
