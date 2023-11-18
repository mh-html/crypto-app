const transformData = (dataSet, dataType) => {
  const data = dataSet[dataType] || []; // Handle missing or undefined data types
  return Array.isArray(data)
    ? data.map(([dataItem, typeItem]) => ({ data: dataItem, [dataType]: typeItem }))
    : [];
};

const currencySymbols = {
  usd: "$",
  eur: "€",
  jpy: "¥",
  gbp: "£",
  sar: "﷼"
};

export { transformData, currencySymbols };

