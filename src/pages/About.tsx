const About = () => {
    const techStack = [
        {
            category: 'Frontend',
            technologies: [
                'React',
                'TypeScript',
                'Tailwind CSS',
                'React Router',
            ],
        },
        {
            category: 'Development Tools',
            technologies: ['Vite', 'ESLint', 'Git'],
        },
    ];

    return (
        <div className="space-y-8">
            <div className="border-b pb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                    About Our App
                </h1>
                <p className="mt-2 text-gray-600">Tech stack used</p>
            </div>

            <div className="space-y-6">
                {techStack.map((stack) => (
                    <div key={stack.category} className="space-y-3">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {stack.category}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {stack.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
