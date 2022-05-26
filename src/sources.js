window.sources = [
  {
    parent: "scratch-projects",
    loc: "Projects [1-10000].zip",
    start: 1,
    end: 10000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [10001-20000].zip",
    start: 10001,
    end: 20000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [20001-30000].zip",
    start: 20001,
    end: 30000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [30001-40000].zip",
    start: 30001,
    end: 40000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [40001-50000].zip",
    start: 40001,
    end: 50000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [50001-60000].zip",
    start: 50001,
    end: 60000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [60001-70000].zip",
    start: 60001,
    end: 70000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [70001-80000].zip",
    start: 70001,
    end: 80000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [80001-90000].zip",
    start: 80001,
    end: 90000,
  },
];

window.count = window.sources[window.sources.length - 1].end;

window.shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
