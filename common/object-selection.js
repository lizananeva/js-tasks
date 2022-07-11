// #2 Object selection

const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = workers => {
  const worthyWorkers = [];
  const worthySalary = 1000;

  workers.forEach(worker => {
    if (worker.salary > worthySalary) {
      worthyWorkers.push(worker.name);
    }
  });

  return worthyWorkers;
}

console.log(getWorthyWorkers(workers));
