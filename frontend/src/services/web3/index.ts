import { createThirdwebClient } from "thirdweb";
import "dotenv/config";

export const THIRDWEB_CLIENT = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});
