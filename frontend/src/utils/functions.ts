const truncateAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.slice(-4)}`;
};
