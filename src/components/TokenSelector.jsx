import Select from "react-select";
import { COMMON_TOKENS } from "../constants";

const tokenOptions = COMMON_TOKENS.map((token) => ({
  label: token,
  value: token,
}));

const TokenSelector = ({ trackedTokens, setTrackedTokens }) => {
  const value = tokenOptions.filter((option) =>
    trackedTokens.includes(option.value)
  );

  return (
    <Select
      isMulti
      options={tokenOptions}
      value={value}
      onChange={(selected) => setTrackedTokens(selected.map((s) => s.value))}
      classNamePrefix="react-select"
      styles={{
        control: (base) => ({
          ...base,
          backgroundColor: "#1f2937",
          borderColor: "#374151",
          color: "white",
          padding: "2px",
        }),
        input: (base) => ({ ...base, color: "white" }),
        menu: (base) => ({
          ...base,
          backgroundColor: "#1f2937",
          color: "white",
        }),
        multiValue: (styles) => ({
          ...styles,
          backgroundColor: "#374151",
        }),
        multiValueLabel: (styles) => ({
          ...styles,
          color: "white",
        }),
        option: (base, { isFocused }) => ({
          ...base,
          backgroundColor: isFocused ? "#4b5563" : "#1f2937",
          color: "white",
        }),
      }}
    />
  );
};

export default TokenSelector;
