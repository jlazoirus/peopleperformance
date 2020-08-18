<template>
  <div class="hello">
    <div class="columns col-container">
      <div class="column column-main"
        v-for="dimension in userDimensions"
        v-bind:key="dimension.name">
        <div class="columnHeader">{{ dimension.name }}</div>
        <div 
          class="columns steps"
          v-for="step in dimension.steps"
          v-bind:key="step.number">
          <div
            class="columns is-mobile block"
            v-for="block in step.blocks"
            v-bind:key="block.code">
            <div class="column">{{block.text}}</div>
            <div class="column is-1"><input type="checkbox"></div>
            <div class="column "><textarea  cols='5'></textarea></div>
          </div>
        </div>
      </div>
    </div>
    <button  onclick='alert("Seito 2")'>Guardar</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { UserData } from '@/types/user'

@Component
export default class PersonalMatrix extends Vue { 
  @Prop({}) userData!: UserData

  mounted () {
    console.log(this.userData)
  }
  userDimensions = this.userData.matriz.dimensiones
}
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
textarea {
  width: 100%;
}
.column-main {
  border: 2px solid #000;
}
.steps {
  margin: auto;
  margin-top: 5px;
  border-bottom: 1px solid #000;
}
.block {
  margin-right: 25px;
}
.columnHeader {
    height: 50px;
    background-color: #000;
    color: #fff;
    font-weight: bolder;
}
.hello {
  overflow-y: auto;
  padding: 12px 24px;
}
.col-container {
  padding: 13px;
}
</style>
