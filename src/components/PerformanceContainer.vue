<template>
  <div class="container">
    <p>
      Por favor selecciona tu nombre en la siguiente lista. 
      Depues deberás seleccionar las habilidades y competencias de tu matriz presonal. 
      Si deseas mas info sobre le proceso puede verla
        <a 
            href="https://docs.google.com/presentation/d/1JT8WdjPHkxIuQ4M752ppWJZzMaBHqLGFN-nvYxaefmw/" 
            target="_blank" rel="noopener">
            aquí.
        </a>
    </p>
    <div class="tabs">
      <ul>
        <li
            v-for="tab in tabs"
            v-bind:key="tab.name"
            v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
            v-on:click="currentTab = tab">
            {{ tab.name }}
        </li>
      </ul>
    </div>
    <component v-bind:is="currentTab.component" :user-data="userData" class="tab"></component>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonalMatrix from "@/components/PersonalMatrix.vue"; // @ is an alias to /src
import MatrixData from "@/assets/matriz.json";
import EngagementImpact from './EngagementImpact.vue';
import UmaanImpact from './UmaanImpact.vue'; 
import { UserData } from '@/types/user'


@Component({
  components: {
    PersonalMatrix
  }
})
export default class PerformanceContainer extends Vue { 
  usersDataJson: Array<UserData> = MatrixData.data as unknown as Array<UserData>;
  
  @Prop({ default: ''}) userId!: string

  private tabs: Array<object> = [
        {
            name: "Matriz",
            component: PersonalMatrix
        },
        {
            name: "Engagement",
            component: EngagementImpact
        },
        {
            name: "Umaan",
            component: UmaanImpact
        }
    ];
    currentTab = this.tabs[0];
    id= +this.userId;
    userData = this.usersDataJson[this.id];
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
.tab-button.active{
  background-color: #e0dddd;
  margin: 0;
  padding: 0 15px;
}
p {
    margin: auto;
    width: 60%;
    padding: 30px 0;
}
.container {
  margin: auto;
}
</style>