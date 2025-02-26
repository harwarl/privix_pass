export const truncateAddress = (address: string) => {
  return `${address.substring(0, 5)}.....${address.slice(-4)}`;
};

export const maskPassword = (password: string) => {
  return (
    "•".repeat(Math.min(password.length, 16)) +
    (password.length > 16 ? "..." : "")
  );
};
