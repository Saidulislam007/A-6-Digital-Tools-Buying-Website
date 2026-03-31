import React from 'react';

const Status = () => {
    return (
        <div className="bg-gradient-to-r from-violet-600 via-violet-500 to-purple-600 py-12 px-8 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center text-center divide-y md:divide-y-0 md:divide-x divide-violet-400">
                <div className="w-full py-4 md:py-0">
                    <h2 className="text-5xl font-extrabold mb-2">50K+</h2>
                    <p className="text-violet-100 mr-4 font-medium">Active Users</p>
                </div>
                <div className="w-full py-4 md:py-0">
                    <h2 className="text-5xl font-extrabold mb-2">200+</h2>
                    <p className="text-violet-100 font-medium">Premium Tools</p>
                </div>
                <div className="w-full py-4 md:py-0">
                    <h2 className="text-5xl font-extrabold mb-2">4.9</h2>
                    <p className="text-violet-100 font-medium">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Status;