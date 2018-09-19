export const printWarning = text => {
  const message = "Warning: " + text;
  if (typeof console !== "undefined") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (x) {}
};
