import { exampleController } from './example.controller';

export async function userRouter(app: any) {
	app.get('/example', exampleController.findById);
}
