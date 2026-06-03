"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center gap-4 p-8 border border-gray-200 rounded-lg max-w-sm mx-auto mt-8">
            <h2 className="text-xl font-bold text-gray-800">Client Component</h2>
            <p className="text-5xl font-bold text-blue-600">{count}</p>
            <div className="flex gap-3">
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-6 py-2 bg-gray-100 rounded-lg text-xl font-bold hover:bg-gray-200 transition-colors"
                >
                    -
                </button>
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg text-xl font-bold hover:bg-blue-700 transition-colors"
                >
                    +
                </button>
            </div>
        </div>
    );
}