import React from "react";


function ErrorMessage({ message }) {

    if (message) {
        return <div className="bg-red-300 border border-red-500  py-3 rounded w-50 mb-4 ml-25">
            <p className="text-red-800 font-bold text-sm text-center">{message}</p>
        </div>
    }

}

export default ErrorMessage;