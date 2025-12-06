import Button from './Button';
interface CardProps {
    title: string;
    children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
    return (
        <div className="group bg-white border-lg p-4 rounded-lg shadow-sm">
            <h3>{title}</h3>

            <div>{children}</div>
            {/* hover content */}
            <div className="hidden group-hover:block">
                <p className="">hover content</p>
                <Button text="Quick View" />
            </div>
        </div>
    );
}
