
function ErrorMessage({ message }) {

    if (message) {
        return <div className="flex  justify-center items-center">
            <div className=" bg-red-200 border border-red-600  p-3 rounded mb-4">
            <p className="text-red-800 font-bold text-sm text-center">{message}</p>
        </div>
        </div>
    }

}

export default ErrorMessage;