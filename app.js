const cluster = require("cluster");

if (cluster.isMaster) {
  managerProcess();
} else {
  childProcess();
}

function managerProcess() {
  console.log(`Master ${process.pid} is running`);
  cluster.fork();

  cluster.on("exit", (worker) => {
    console.log("worker %d died (%s). restarting...");
    cluster.fork();
  });
}

function workerProcess() {
  // This is the worker!
  const phin = require("phin")
  
  setInterval(60000, async () => {
    try {
      const res
  })
}
