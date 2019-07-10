<template>
  <div class="hello">
      <b-container>
          <b-row>
              <b-col cols="4">
                  <kendo-calendar :value="new Date()"></kendo-calendar>
              </b-col>
              <b-col cols="4">
                  <h3>Your details</h3>
              </b-col>
              <b-col cols="4">
                  <h3>What to do</h3>
              </b-col>
          </b-row>
      </b-container>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
a {
  color: #35495E;
}
</style>
