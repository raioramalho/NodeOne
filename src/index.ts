import os from 'os';
import cluster from 'cluster';

const runPrimaryProcess = async () => {
	const cpus = os.cpus().length * 2;
	console.log(`☕ - Primary: ${process.pid} is running!`);
	console.log(`☕ - Forking server with ${cpus} processes`);

	for (let index = 0; index < cpus; index++)
		cluster.fork();
};

const runWorkerProcess = async () => {
	console.log(`☕ - New pid ${process.pid}`);
	await import('./server');
};

cluster.isWorker ? runPrimaryProcess() : runWorkerProcess();
