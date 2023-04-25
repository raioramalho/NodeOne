import { app } from './app';


console.clear();

app.listen({
	host: '0.0.0.0',
	port: 3000,
}).then(() => {
	console.log('☕ - NodeOne is Running! at [ http://0.0.0.0:3000 ]');
});

