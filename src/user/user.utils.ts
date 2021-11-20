import { compare, hash } from 'bcryptjs';

export const hashPassword = async (password: string) => {
  return await hash(password, 5);
};

export const comparePasswords = async (exist: string, hashed: string) => {
  return await compare(exist, hashed);
};
