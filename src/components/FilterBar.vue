<template>
  <form class="FilterBar" @submit="SubmitFilter">
    <h3>Filter</h3>
    <div class="form-control">
      <label for="Rank">Rank</label>
      <input type="checkbox" id="Rank" name="Rank" v-model="filterData.Rank" />
    </div>
    <div class="form-control">
      <label for="AgeThatYea">AgeThatYea</label>
      <input
        type="checkbox"
        name="AgeThatYea"
        id="AgeThatYea"
        v-model="filterData.AgeThatYea"
      />
    </div>
    <div class="form-control">
      <label for="Hits">Hits</label>
      <input type="checkbox" name="Hits" id="Hits" v-model="filterData.Hits" />
    </div>
    <button class="btn">Apply</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const filterData = ref({
  Rank: false,
  AgeThatYear: false,
  Hits: false,
});
const emit = defineEmits(["FilterData"]);
const SubmitFilter = (e) => {
  e.preventDefault();
  emit("FilterData", filterData.value);
};
</script>

<style scoped>
.FilterBar {
  width: 300px;
  margin-right: 20px;
}
@media all and (max-width:640px) {
  .FilterBar{
    width: 100%;
    margin-right: 0px;
  }
}
h3 {
  background: #009879;
  color: #fff;
  padding: 0 10px;
}
.FilterBar .form-control {
  display: flex;
  margin: 10px 0;
  justify-content: space-between;
}
.FilterBar .form-control input {
  margin-left: 10px;
}
.btn {
  padding: 10px 0;
  width: 100%;
  border: none;
  background: #111;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}
</style>