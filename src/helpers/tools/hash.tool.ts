import { compare, hash } from 'bcryptjs';

class HashTools {
	async generate(password_hash: string): Promise<string> {
		const genHash = await hash(password_hash, 6);
		return genHash;
	}

	async compare(password: string, password_hash: string): Promise<boolean> {
		const result = await compare(password, password_hash);
		return result;
	}
}

export const hashHelper = new HashTools();
