import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//adicione seus models aqui!
type ModelName = 'Example' | 'ModelTwo'

export class Repository{
	constructor(public readonly model: ModelName) {}
	// -Implemente suas novas classes de repositorio aqui!!
	async findMany(includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].findMany({
			include: includes,
		});
	}

	async findById(id: number, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].findUnique({
			where: { id },
			include: includes,
		});
	}

	async findByEmail(email: string, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].findUnique({
			where: { email },
			include: includes,
		});

	}

	async updateById(id: number, data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].update({
			where: { id },
			data,
			includes,
		});
	}

	async updateByEmail(email: string, data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].update({
			where: { email },
			data,
			includes,
		});
	}

	async deleteById(id: number, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].delete({
			where: { id },
		});
	}

	async deleteByEmail(email: string, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].delete({
			where: { email },
		});
	}

	async create(data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].create({
			data,
		});
	}
}
