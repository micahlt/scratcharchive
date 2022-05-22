<script>
export default {
  name: "App",
};
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Helvetica Neue", sans-serif;
  text-align: center;
  background: var(--bg-1);
  color: var(--txt-1);
}

html {
  --bg-1: #fff;
  --bg-2: #ddd;
  --txt-1: #000;
  --bd: transparent;
  --acc: #0fbd8c;
  --acc-dark: #0b8e69;
  background: var(--bg-1);
}

::selection {
  color: black;
  background-color: #0fbd8c;
}

@media (prefers-color-scheme: dark) {
  html {
    --bg-1: #171717;
    --bg-2: #272727;
    --txt-1: #fff;
    --bd: #2c2c2c;
    --acc: #064735;
    --acc-dark: #042e22;
  }
}

@media only screen and (max-width: 600px) {
  .hidden-mobile {
    display: none !important  ;
  }
}
</style>
