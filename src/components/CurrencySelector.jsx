const CurrencySelector = ({
  vsCurrency,
  setVsCurrency,
  supportedCurrencies,
}) => {
  return (
    <div className="space-y-3">
      <label className="text-sm font-semibold">Vs Currency</label>
      <select
        className="w-full p-2 bg-gray-800 text-white rounded"
        value={vsCurrency}
        onChange={(e) => setVsCurrency(e.target.value)}
      >
        {supportedCurrencies.map((cur) => (
          <option key={cur} value={cur}>
            {cur.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelector;
