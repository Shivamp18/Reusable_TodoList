function FilterButtons({ currentFilter, setFilter }) {
  return (
    <div className="flex gap-0.5 mt-15 mb-20 justify-center text-lg">
      <button
        onClick={() => setFilter("all")}
        className={`cursor-pointer px-3 py-1 rounded-l ${currentFilter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`cursor-pointer px-3 py-1 ${currentFilter === "completed" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
      >
        Completed
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`cursor-pointer px-3 py-1 rounded-r ${currentFilter === "pending" ? "bg-yellow-600 text-white" : "bg-gray-200"
          }`}
      >
        Pending
      </button>
    </div>
  );
}

export default FilterButtons;
