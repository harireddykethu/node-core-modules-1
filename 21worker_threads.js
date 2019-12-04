const { Worker, isMainThread, parentPort } = require('worker_threads');
// This is still experimental. This code as such causes an error, as worker_threads are not yet part of stable Node
//  run this command: node --experimental-worker worker-thread-basic.js <nThreads>

if (isMainThread) {
  console.log(`Inside the main thread creating ${process.argv[2]} threads`);

  const threadPool = [];

  for (let index = 0; index < process.argv[2]; index++) {
    const worker = new Worker(__filename);
    //  Whenever something happens in the worker thread,
    //  'message' event will be emitted. Listening to those events.
    worker.on('message', data => {
      console.log(`Worker ${index + 1}`, data);
    });

    worker.on('error', error => {
      console.log(`Worker ${index + 1}`, error);
    });

    worker.on('exit', code => {
      console.log(`Worker ${index + 1} exited with code ${code}`);
    });

    threadPool.push(worker);
  }
} else {
  //  We can put our load here.
  //  This will be executed not in main thread, but inside the worker thread
  parentPort.postMessage({ on: new Date() });

  setTimeout(() => {
    parentPort.postMessage({
      on: new Date(),
      by: process.pid
    });
  }, 2000);
}
