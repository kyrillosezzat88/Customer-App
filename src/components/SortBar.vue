<template>
  <select @change="HandleSort" class="sort">
    <option selected hidden disabled>Sort</option>
    <option value="Rank">Rank</option>
    <option value="Hits">Hits</option>
  </select>
</template>

<script setup>
const props = defineProps({
  HandleSort: Function
});
</script>

<style scoped >
select {
  width: 270px;
  padding: 10px;
  box-shadow: 0 0 5px 0 #ddd;
  border: none;
}
</style>