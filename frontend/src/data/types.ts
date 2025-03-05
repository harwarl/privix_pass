export type VerifySignaturePayload = {
  signature: string;
  address: string;
  nonce: string;
};

export type VerifyMasterPasswordPayload = {
  address: string;
  masterPassword: string;
};
