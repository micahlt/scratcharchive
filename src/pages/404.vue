<template>
  <main>
    <h1>404</h1>
    <p>Whoops, couldn't find that page.<br /><br /></p>
    <router-link to="/home">Go home</router-link>
  </main>
</template>

<script>
export default {
  name: "404",
};
</script>

<style scoped>
main {
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 5rem;
}

a {
  color: #57ba8f;
}
</style>