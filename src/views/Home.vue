<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_umaan.png" style="width: 50%;"/>
    <h1>People Performance Management</h1>
    <h3>Selecciona tu nombre</h3>
    <select name="" id="nameSelect" v-model="selectedUserId">
      <option :selected="true">Umaano...</option>
      <option v-for="user in users" v-bind:key="user.id" v-bind:value="user.id">{{user.name}}</option>
    </select>
    <PerformanceContainer  :user-id="selectedUserId"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from '@/types/user'
import PerformanceContainer from "@/components/PerformanceContainer.vue";
import usersJson from "@/assets/users.json"

@Component({
  components: {
    PerformanceContainer
  },
})
export default class Home extends Vue {
  users: Array<User> = usersJson.users as unknown as Array<User>;
  private selectedUserId: string;

  constructor () {
    super();
    this.selectedUserId = this.users[0].id
  }
}
</script>
<style scoped>
h3{
  margin-top: 30px;
}
#nameSelect{
  width: 250px;
  padding: 5px 10px;
  margin: 4px 0px 20px 0px;
}
</style>
