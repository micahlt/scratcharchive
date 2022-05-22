<template>
  <div class="project">
    <img
      :src="`https://uploads.scratch.mit.edu/get_image/project/${id}_293x220.png`"
      alt="Project thumbnail"
      class="image"
    />
    <h4>{{ name }}</h4>
    <h3>#{{ id }}</h3>
    <span title="Options" role="button" @click="toggleOpts">...</span>
    <ul class="options" v-if="opened" v-click-outside="outsideOpts">
      <li role="link"><a :href="href">Download</a></li>
      <li role="link" @click="open" v-if="shared">Open on Scratch</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    id: Number,
    author: String,
    source: String,
  },
  data() {
    return {
      opened: false,
      name: "Unshared project",
      shared: false,
    };
  },
  methods: {
    toggleOpts() {
      this.opened = !this.opened;
    },
    outsideOpts() {
      if (this.opened) this.opened = false;
    },
    open() {
      window.open(`https://scratch.mit.edu/projects/${this.id}`);
    },
  },
  computed: {
    href() {
      return `https://archive.org/download/${encodeURIComponent(
        sources[this.source].parent
      )}/${encodeURIComponent(sources[this.source].loc)}/${encodeURIComponent(
        sources[this.source].loc.replace(".zip", "")
      )}${encodeURIComponent("/")}${this.id}.sb3`;
    },
  },
  created() {
    fetch(`https://itchy-api.vercel.app/api/project?id=${this.id}`)
      .then((res) => {
        if (res.status == 200) {
          this.shared = true;
          return res.json();
        } else {
          return {
            title: "Unshared project",
          };
        }
      })
      .then((json) => {
        this.name = json.title;
      });
  },
};
</script>

<style scoped>
.project {
  width: 10rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px;
  margin: 1rem;
  text-align: left;
  padding: 1rem;
  border: 1px solid var(--bd);
  border-radius: 5px;
  flex-grow: 1;
  position: relative;
}

h4 {
  font-weight: normal;
  opacity: 0.6;
}

.image {
  width: 100%;
  height: 9rem;
  background: var(--bg-2);
  margin-bottom: 0.5rem;
  border-radius: 4px;
  object-fit: cover;
}

span {
  color: var(--txt-1);
  position: absolute;
  transform: rotate(90deg);
  right: 10px;
  bottom: 1rem;
  cursor: pointer;
  user-select: none;
}

.options {
  position: absolute;
  background: var(--bg-2);
  border-radius: 5px;
  list-style: none;
  right: 15px;
  bottom: 0;
  transform: translateY(90%);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px;
  z-index: 1;
  overflow: hidden;
}

.options li {
  cursor: pointer;
  font-size: 14px;
  padding: 10px 10px;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
  width: 100%;
}

.options li:hover {
  background: var(--txt-1);
  color: var(--bg-2);
}
</style>