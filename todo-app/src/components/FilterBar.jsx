const FILTERS = [
  { id: "all", label: "All" },
  { id: "pending", label: "Open" },
  { id: "completed", label: "Done" },
];

function FilterBar({ filter, setFilter }) {
  return (
    <div className="filters">
      {FILTERS.map((item) => (
        <button
          key={item.id}
          className={filter === item.id ? "is-active" : ""}
          onClick={() => setFilter(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
