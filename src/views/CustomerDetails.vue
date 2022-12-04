<template>
  <section class="CoustomerDetails" v-if="!isLoading">
    <div>
      <h4>Player</h4>
      <p>{{ customerData.Player }}</p>
    </div>
    <div>
      <h4>Rank</h4>
      <p>{{ customerData.Rank }}</p>
    </div>
    <div>
      <h4>AgeThatYear</h4>
      <p>{{ customerData.AgeThatYear }}</p>
    </div>
    <div>
      <h4>Hits</h4>
      <p>{{ customerData.Hits }}</p>
    </div>
    <div>
      <h4>Year</h4>
      <p>{{ customerData.Year }}</p>
    </div>
    <div>
      <h4>Bats</h4>
      <p>{{ customerData.Bats }}</p>
    </div>
  </section>
  <div class="spinner">
    <Spinner v-if="isLoading" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Spinner from "../components/Spinner.vue";
const route = useRoute();
const customerData = ref({});
const isLoading = ref(true);
// get customer details
onMounted(async () => {
  isLoading.value = true;
  let res = await fetch(`/api/hitsSingleSeason/${route.params.id}`);
  customerData.value = await res.json();
  isLoading.value = false;
});
</script>

<style scoped>
.CoustomerDetails {
  padding: 50px 0;
  display: grid;
  gap: 1rem;
}
@media (min-width: 600px) {
  .CoustomerDetails {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 900px) {
  .CoustomerDetails {
    grid-template-columns: repeat(3, 1fr);
  }
}
.spinner {
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}
</style>