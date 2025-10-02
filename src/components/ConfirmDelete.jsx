


function ConfirmDelete({ openConfirm, deleteTask, cancelDelete }) {

    if (!openConfirm) {
        return null;
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30">
            <div className="bg-white rounded p-6 w-80">
                <p className="text-lg font-medium mb-6">Are you sure you want to delete?</p>
                <div className="flex justify-end gap-3">
                    <button onClick={deleteTask} className="bg-red-400 px-4 py-2 rounded hover:bg-red-600 cursor-pointer">
                        Yes
                    </button>

                    <button onClick={cancelDelete} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDelete;







