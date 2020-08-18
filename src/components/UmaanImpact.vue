<template>
  <div class="hello">
    <div class="columns">
      <div class="column">
        Impacto en Umaan
        <div>
          <span>1</span>
          <input type="checkbox">
        </div>
        <div>
          <span>2</span>
          <input type="checkbox">
        </div>
        <div>
          <span>3</span>
          <input type="checkbox">
        </div>
        <div>
          <span>4</span>
          <input type="checkbox">
        </div>
        <div>
          <span>5</span>
          <input type="checkbox">
        </div>
      </div>
    </div>
    <button>Guardar</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class UmaanImpact extends Vue { }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0000;
}
</style>