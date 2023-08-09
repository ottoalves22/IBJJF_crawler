const { Worker, isMainThread, parentPort } = require('worker_threads')

if(isMainThread) {
    const worker = new Worker(__filename)
    worker.once('message', (message: any) => {
        console.log(message)
    })
    worker.postMessage('Main thread: Hey there')
} else {
    parentPort.once('message', (message: any) => {
        console.log(message)
        parentPort.postMessage('Worker thread: Hello!')
    })
    console.log("Worker: \"Hello word!\"")
}
