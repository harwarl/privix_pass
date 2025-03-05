import crypto from "crypto";

export const truncateAddress = (address: string) => {
  return `${address.substring(0, 5)}.....${address.slice(-4)}`;
};

export const maskPassword = (password: string) => {
  return (
    "•".repeat(Math.min(password.length, 16)) +
    (password.length > 16 ? "..." : "")
  );
};

export const calculatePasswordStrength = (password: string) => {
  let strength = 0;
  if (password.length >= 8) strength += 20;
  if (/[A-Z]/.test(password)) strength += 20;
  if (/\d/.test(password)) strength += 20;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 20;
  if (/[a-z]/.test(password)) strength += 20;

  return strength;
};

export const getPasswordStrengthLabel = (strength: number) => {
  if (strength === 100) return { text: "Very Strong", color: "text-green-500" };
  if (strength >= 75) return { text: "Strong", color: "text-teal-500" };
  if (strength >= 50) return { text: "Moderate", color: "text-yellow-500" };
  if (strength >= 25) return { text: "Weak", color: "text-orange-500" };
  return { text: "Very Weak", color: "text-red-500" };
};

export const customCharset =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export const generateRandomPassword = (url: string, username: string) => {
  const masterKey = crypto.randomBytes(32);
  const hexPassword = createHmac(masterKey, url, username);
  return mapToCustomCharset(hexPassword, customCharset);
};

const createHmac = (
  masterKey: any,
  website: string,
  username: string,
  hashFunction = "sha256"
) => {
  const publicData = website + username;
  const hmac = crypto.createHmac(hashFunction, masterKey);
  hmac.update(publicData);
  return hmac.digest("hex");
};

const mapToCustomCharset = (hexPassword: string, charset: string) => {
  let password = "";
  for (let i = 0; i < hexPassword.length; i += 2) {
    const byte = parseInt(hexPassword.substr(i, 2), 16);
    password += charset[byte % charset.length];
  }
  return password;
};
