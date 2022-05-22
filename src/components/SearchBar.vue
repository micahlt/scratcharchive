<template>
  <input
    type="text"
    name="Search"
    :placeholder="`Search ${count} projects by ID...`"
    v-model="query"
    @keyup="$emit('update', query)"
  />
</template>

<script>
export default {
  name: "SearchBar",
  emits: ["update"],
  data() {
    return {
      query: "",
    };
  },
  computed: {
    count() {
      return sources[sources.length - 1].end;
    },
  },
};
</script>

<style scoped>
input {
  transform: translateY(-50%);
  margin: auto;
  padding: 1rem 1.25rem;
  width: 30vw;
  min-width: 15rem;
  max-width: 30rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px;
  border: 1px solid var(--bd);
  border-radius: 5px;
  position: sticky;
  top: 50px;
  z-index: 2;
  background: var(--bg-1);
  color: var(--txt-1);
}

input:focus {
  outline-color: var(--acc);
}

@media only screen and (max-width: 600px) {
  input {
    position: initial;
  }
}
</style>