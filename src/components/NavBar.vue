<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav>
    <h1 title="Scratch Archive" role="link" @click="$router.push('/')">SA</h1>
    <router-link to="/about" title="About the archive">About</router-link>
    <router-link to="/404" title="Find a random project">Random</router-link>
    <div class="nav-spacer"></div>
    <a
      href="https://archive.org/download/scratch-projects"
      class="button secondary"
      target="_blank"
      title="View on Archive.org"
      >Archive.org</a
    >
    <a
      href="https://github.com/micahlt/sbarchive#readme"
      class="button primary hidden-mobile"
      title="Contribute projects to the archive"
      >Contribute</a
    >
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  height: 50px;
  background: var(--acc);
  color: white;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 3px;
  position: sticky;
  top: 0;
  z-index: 1;
}

h1 {
  margin-left: 40px;
  margin-right: 30px;
  color: #d6fff6ce;
  font-size: 30px;
  cursor: pointer;
}

.nav-spacer {
  flex-grow: 1;
}

a {
  color: white;
  text-decoration: none;
  padding: 25px 12px;
  font-size: 14px;
  font-weight: bold;
}

a:hover {
  background: var(--acc-dark);
}

a.button.primary {
  border-radius: 5px;
  padding: 10px 15px;
  display: block;
  margin-right: 40px;
  border: 1px solid white;
  background: white;
  color: var(--acc);
}

a.button.secondary {
  border-radius: 5px;
  padding: 10px 15px;
  display: block;
  margin-right: 10px;
  border: 1px solid white;
  background: var(--acc);
  color: white;
}

a.button.secondary:hover {
  background: white;
  color: var(--acc);
}
</style>
