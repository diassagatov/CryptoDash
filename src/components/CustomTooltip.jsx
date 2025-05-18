const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-3 text-sm border border-gray-700">
      <p className="text-gray-400 mb-1">{label}</p>
      {payload.map((entry, index) => (
        <div key={index} className="flex justify-between items-center">
          <span
            style={{ color: entry.color }}
            className="capitalize font-semibold"
          >
            {entry.name}
          </span>
          <span className="ml-2">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CustomTooltip;
