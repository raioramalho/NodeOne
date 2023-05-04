import { Repository } from '../base/repository';

const prisma = new PrismaClient();

export class ExampleRepository extends Repository {
	async deleteMany() {
		//eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		return await prisma[this.model.toLocaleLowerCase()].deleteMany();
	}
}
