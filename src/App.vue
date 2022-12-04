<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="container">
    <Header />
    <RouterView v-slot="{ Component }">
      <KeepAlive include="Home">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  padding: 10px 35px;
}
a{
  text-decoration: none;
  color: #000;
  transition: all .2s ease-in-out;
}
a:hover{
  color: #009879;
}
</style>
