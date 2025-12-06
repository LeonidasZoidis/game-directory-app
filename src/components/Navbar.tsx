import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Your App Name</h1>
                    <div className="flex space-x-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md text-sm font-medium ${
                                        isActive
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
