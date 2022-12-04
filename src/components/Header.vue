<template>
  <header>
    <h2>Customers App</h2>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
    </ul>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}
ul {
  list-style: none;
  display: flex;
}
ul li {
  margin: 0 5px;
}
</style>