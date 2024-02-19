const crypto = require("crypto-js");

export const hashAndSalt = (password: string, salt: string): string => {
  const hash = crypto.SHA256(password + salt).toString();
  return hash;
};

export const generateSalt = (): string => {
  return crypto.lib.WordArray.random(128 / 8).toString();
};

export const validatePassword = (
  password: string,
  salt: string,
  hashedPassword: string
): boolean => {
  return hashAndSalt(password, salt) === hashedPassword;
};

//add this all to middleware