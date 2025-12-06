import { Card } from '../components/Card';

export function Home() {
    return (
        <div className="space-y-6">
            <h2 className="text-6xl font-bold">Explore</h2>
            <p className="text-gray-600">
                Explore over 350,000 games for 50 platforms including mobiles
            </p>

            <section className="grid grid-cols-4 gap-4">
                <Card title="a" children={''} />
            </section>
        </div>
    );
}
