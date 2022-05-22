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
];

window.lastProject = 30000;

window.shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
