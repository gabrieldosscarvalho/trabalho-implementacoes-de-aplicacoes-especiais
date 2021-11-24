import React, { useEffect } from "react";
export default function Toast({ title, type = "" }) {
    let color = "";

    switch (type) {
        case "success":
            color = "green";
            break;

        case "error":
            color = "red";
            break;

        default:
            color = "grey";
            break;
    }

    return (
        <div className="fixed inset-x-0 top-0 rounded-t-xl overflow-hidden bg-white bg-opacity-10 p-10">
            <div className="flex justify-around">
                <span className="relative inline-flex rounded-md shadow-sm">
                    <span className="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150">
                        {title}
                    </span>

                    <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                    </span>
                </span>
            </div>
        </div>
    );
}
