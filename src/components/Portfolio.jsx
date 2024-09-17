import React from 'react';

const portfolioItems = [
    {
        title: "A Guide to Igniting Your Imagination",
        date: "10 FEB 2023",
        author: "JOHN DOE",
        imageUrl: "https://readymadeui.com/Imagination.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
    {
        title: "Hacks to Supercharge Your Day",
        date: "7 JUN 2023",
        author: "MARK ADAIR",
        imageUrl: "https://readymadeui.com/hacks-watch.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
    {
        title: "Trends and Predictions",
        date: "5 OCT 2023",
        author: "SIMON KONECKI",
        imageUrl: "https://readymadeui.com/prediction.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
    {
        title: "Trends and Predictions",
        date: "5 OCT 2023",
        author: "SIMON KONECKI",
        imageUrl: "https://readymadeui.com/images/food.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
    {
        title: "Trends and Predictions",
        date: "5 OCT 2023",
        author: "SIMON KONECKI",
        imageUrl: "https://readymadeui.com/images/food11.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
    {
        title: "Trends and Predictions",
        date: "5 OCT 2023",
        author: "SIMON KONECKI",
        imageUrl: "https://readymadeui.com/images/food22.webp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula."
    },
];

const Portfolio = () => {
    return (
        <div className="bg-white p-4 mt-44">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-xl mx-auto">
                    <p className="text-sm flex justify-center items-center font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> PORTFOLIO</p>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 inline-block">My Latest Work</h2>
                    <p className="text-gray-600 text-sm mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 max-lg:max-w-3xl max-md:max-w-md mx-auto">
                    {portfolioItems.map((post, index) => (
                        <div key={index} className="bg-white cursor-pointer rounded-lg overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-60">
                            <img src={post.imageUrl} alt={post.title} className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300" />
                            <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
                                <span className="text-sm block mb-2 text-yellow-400 font-semibold">{post.date} | BY {post.author}</span>
                                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                                <div className="mt-4">
                                    <p className="text-gray-200 text-sm">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
