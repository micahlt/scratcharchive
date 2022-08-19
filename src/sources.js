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
  {
    parent: "scratch-projects",
    loc: "Projects [90001-100000].zip",
    start: 90001,
    end: 100000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [100001-110000].zip",
    start: 100001,
    end: 110000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [110001-120000].zip",
    start: 110001,
    end: 120000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [120001-130000].zip",
    start: 120001,
    end: 130000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [130001-140000].zip",
    start: 130001,
    end: 140000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [140001-150000].zip",
    start: 140001,
    end: 150000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [150001-160000].zip",
    start: 150001,
    end: 160000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [160001-170000].zip",
    start: 160001,
    end: 170000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [170001-180000].zip",
    start: 170001,
    end: 180000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [180001-190000].zip",
    start: 180001,
    end: 190000,
  },
  {
    parent: "scratch-projects",
    loc: "Projects [190001-200000].zip",
    start: 190001,
    end: 200000,
  }
];

window.count = window.sources[window.sources.length - 1].end;

window.shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
