import { PrismaClient } from '@prisma/client';
import { Repository } from '../base/repository';

const prisma = new PrismaClient();

export class ExampleRepository extends Repository {}
