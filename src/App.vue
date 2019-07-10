<template>
  <div id="app">
    <header>
      <span>SELIANORD</span>
    </header>
    <main>
      <headerPartial />
      <hello></hello>
      <kendo-button class="button" icon="arrow-right" @click="position++">Get to know us ...</kendo-button>
    </main>
    <footerPartial />
  </div>
</template>

<script>
import Hello from './components/Hello'
import headerPartial from './components/headerPartial'
import footerPartial from './components/footerPartial'
import { Button } from '@progress/kendo-buttons-vue-wrapper'

export default {
  name: 'app',
  components: {
    Hello,
    headerPartial,
    footerPartial,
    Button
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
