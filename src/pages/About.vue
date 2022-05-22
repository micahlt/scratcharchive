<template>
  <main>
    <h1>About the Archive</h1>
    <p>
      The Scratch Archive was founded in May of 2022 when multiple Scratch power
      users were made aware of a
      <a href="https://github.com/LLK/scratch-www/pull/6773" target="_blank"
        >pull request</a
      >
      in the Scratch web client repository. This PR would add an authentication
      token to the projects API used by many external services like
      <a href="https://turbowarp.org/" target="_blank">TurboWarp</a> and
      <a href="https://forkphorus.github.io/" target="_blank">forkphorus</a>,
      making them unusable. There was a large amount of pushback on this
      addition, but the Scratch Team feels that it is necessary to proceed to
      protect unshared projects from being used for
      <a
        href="https://github.com/LLK/scratch-www/pull/6773#issuecomment-1120491899"
        target="_blank"
        >nefarious purposes</a
      >.<br /><br />
      GitHub user
      <a href="https://github.com/micahlt" target="_blank">@micahlt</a> created
      a <a href="">repository</a> containing scripts to help archive projects
      for historical reasons. Additional improvements to these scripts have been
      made by
      <a href="MagentaSuperNova" target="_blank">@MagentaSuperNova</a> on
      GitHub. This frontend client was written by
      <a href="https://github.com/micahlt" target="_blank">@micahlt</a> and is
      licensed under the
      <a href="https://opensource.org/licenses/MIT" target="_blank"
        >MIT License</a
      >.
    </p>
  </main>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      count: window.count,
    };
  },
};
</script>

<style scoped>
main {
  max-width: 700px;
  margin: auto;
  margin-top: 2rem;
  width: 90%;
  text-align: left;
}

h1 {
  margin-bottom: 1rem;
}

a {
  color: inherit;
}

p {
  line-height: 1.3em;
}
</style>