const worker = new Worker(new URL("worker_spawn.js", import.meta.url).href, {
  type: "module",
});

worker.onmessage = (data) => console.log(data);
