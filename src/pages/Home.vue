<template>
  <div class="header">
    <h1>Preserving Scratch history since 2022</h1>
    <p>
      The Scratch Archive has a goal of archiving as many projects as possible
      so that no part of the platform's history is lost.
    </p>
  </div>
  <SearchBar @update="updateQuery" :count="count" />
  <ProjectList :projects="compList" />
  <a href="#" class="more" @click.prevent="loadMore">Load more</a>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      list: [],
      query: "",
      totalProjects: 1000,
      lastLoaded: 0,
      bucket: 0,
    };
  },
  methods: {
    updateQuery(q) {
      this.query = q;
      this.$router.push(`?q=${q}`);
    },
    loadProjects(r, l) {
      if (!r) r = 0;
      if (!l) l = Infinity;
      fetch(
        encodeURI(
          `https://archive.org/download/${sources[r].parent}/${sources[r].loc}/`
        )
      ).then((res) => {
        if (res.ok) {
          let i;
          for (
            i = this.lastLoaded + 1;
            i < sources[r].end && i < this.lastLoaded + l;
            i++
          ) {
            this.list.push({
              id: i,
              source: r,
            });
          }
          this.lastLoaded = i;
          if (i >= sources[r].end) this.bucket++;
        } else {
          alert("Data fetch failed.");
        }
      });
    },
    loadMore() {
      this.loadProjects(this.bucket, 200);
    },
  },
  computed: {
    compList() {
      if (this.query > this.lastLoaded && this.query < this.count) {
        const sourceIndex = sources.findIndex((s) => {
          return this.query > s.start && this.query < s.end;
        });
        if (sourceIndex != -1) {
          this.list.push({
            id: this.query,
            source: sourceIndex,
          });
        }
        this.list = [...new Set(this.list)];
      }
      return this.list.filter((item) => {
        if (String(item.id).includes(this.query)) return true;
        return false;
      });
    },
    count() {
      return sources[sources.length - 1].end;
    },
  },
  mounted() {
    this.loadProjects(0, 55);
  },
};
</script>

<style scoped>
.header {
  width: calc(100% - 80px);
  background: var(--acc-dark);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 40px;
}

.header p {
  margin-top: 0.75rem;
}

.more {
  display: block;
  text-decoration: none;
  padding: 12px 12px;
  font-size: 14px;
  font-weight: bold;
  background: var(--txt-1);
  color: var(--bg-1);
  width: max-content;
  margin: auto;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  border-radius: 5px;
}

.count {
  opacity: 0.5;
}
</style>