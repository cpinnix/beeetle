export const printWarning = (subject, text) => {
  const message = `Warning - ${subject} - ${text}`;
  if (typeof console !== "undefined") {
    console.error(message);
  }
  try {
    throw new Error(message);
  } catch (x) {}
};
