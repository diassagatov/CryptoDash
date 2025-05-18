import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import CustomTooltip from "./CustomToolTip";

const colorPalette = [
  "#00ffcc",
  "#ff8c00",
  "#00bfff",
  "#ff4d4d",
  "#adff2f",
  "#dda0dd",
  "#ffd700",
];

const ChartWrapper = ({ tokens, data }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Live Price Chart</h2>
      {data.length === 0 ? (
        <p className="text-gray-400">Waiting for price data...</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis domain={["auto", "auto"]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            {tokens.map((token, i) => (
              <Line
                key={token}
                type="monotone"
                dataKey={token}
                stroke={colorPalette[i % colorPalette.length]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ChartWrapper;
