import "dotenv/config";

export const APP_NAME = "Pass";
export const APP_DESCRIPTION = "Decentralizd Password Storage";

export const SIGN_MESSAGE = (userAddress: string, nonce: number) => {
  //   const message = `Welcome to Pass By Privix!

  // By signing this message, you verify ownership of your wallet and authorize access to My dApp.

  // Wallet Address: ${userAddress}
  // Nonce: ${nonce}
  // Timestamp: ${new Date().toISOString()}

  // This request will not trigger a blockchain transaction or cost any gas fees.`;

  const message = `Welcome to Pass By Privix!\n\n    By signing this message, you verify ownership of your wallet and authorize access to Pass.\n    \n    Wallet Address: ${userAddress}\n    Nonce: ${
    nonce ?? "x099nopcb3nkvtn0dzwa"
  }\n    Timestamp: 2025-03-03T16:31:27.827Z\n    \n    This request will not trigger a blockchain transaction or cost any gas fees.`;
  return message;
};
