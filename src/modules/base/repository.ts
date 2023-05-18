import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

//adicione seus models aqui!
type ModelName = Prisma.ModelName;

export class Repository{
	constructor(public readonly model: ModelName) {}
	// -Implemente suas novas classes de repositorio aqui!!
	async findMany(includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].findMany({
			include: includes,
		});
		prisma.$disconnect();
		return result;
	}

	async findById(id: number, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].findUnique({
			where: { id },
			include: includes,
		});
		prisma.$disconnect();
		return result;
	}

	async findByObj(obj: object, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].findUnique({
			where: obj,
			include: includes,
		});
		prisma.$disconnect();
		return result;
	}

	async findByEmail(email: string, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].findUnique({
			where: { email: email },
			include: includes,
		});
		prisma.$disconnect();
		return result;

	}

	async updateById(id: number, data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].update({
			where: { id },
			data,
			includes,
		});
		prisma.$disconnect();
		return result;
	}

	async updateByEmail(email: string, data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].update({
			where: { email },
			data,
			includes,
		});
		prisma.$disconnect();
		return result;
	}

	async deleteById(id: number, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].delete({
			where: { id },
		});
		prisma.$disconnect();
		return result;
	}

	async deleteByEmail(email: string, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].delete({
			where: { email },
		});
		prisma.$disconnect();
		return result;
	}

	async create(data: any, includes?: object) {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		const result = await prisma[this.model.toLocaleLowerCase()].create({
			data,
			includes,
		});
		prisma.$disconnect();
		return result;
	}
}
