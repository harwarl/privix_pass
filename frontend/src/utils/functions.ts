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

export const generateRandomPassword = (url: string, username: string) => {
  return url + username;
};
