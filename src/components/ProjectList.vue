<template>
  <main>
    <ProjectCard
      v-for="p in projects"
      :key="p.id"
      :name="p.name"
      :id="p.id"
      :source="p.source"
    />
  </main>
</template>

<script>
export default {
  name: "ProjectList",
  props: {
    projects: Array,
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -1rem;
}
</style>