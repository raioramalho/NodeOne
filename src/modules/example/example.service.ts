import { Example } from '@prisma/client';
import { errorList } from '../../helpers/errors/list.error';
import { ResponseError } from '../../helpers/errors/response.error';
import { ExampleRepository } from './example.repository';
import { hashHelper } from '../../helpers/tools/hash.tool';

class ExampleService {
	Repository = new ExampleRepository('Example');

	async create(data: any): Promise<Example> {
		try {
			const verify = await this.Repository.findByEmail(data.email);
			if (verify) {
				throw new ResponseError(errorList.Already_Exists);
			}

			data.password = await hashHelper.generate(data.password);

			const example = await this.Repository.create(data);

			if (!example) {
				throw new ResponseError(errorList.Expectation_Failed_Error);
			}

			return example;
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	async findMany(): Promise<Example[]> {
		try {
			const examples = await this.Repository.findMany();
			if(!examples) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
			return examples;
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	async findById(id: number): Promise<Example> {
		try {
			const verify = await this.Repository.findById(+id);
			if (!verify) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
			return verify;
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	async deleteById(id: number): Promise<Example> {
		try {
			const remove = await this.Repository.deleteById(+id);
			if (!remove) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
			return remove;
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	async deleteOne(id: number): Promise<Example> {
		try {
			const removelAll = await this.Repository.deleteById(id);
			if (!removelAll) {
				throw new ResponseError(errorList.Not_Found_Error);
			}
			return removelAll;
		} catch (error) {
			throw new ResponseError(error);
		}
	}
}

export const exampleService = new ExampleService();
