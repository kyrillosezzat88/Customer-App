<template>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Rank</th>
        <th>Player</th>
        <th>AgeThatYear</th>
        <th>Hits</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody v-if="FiltratedCustomers">
      <tr v-for="customer in FiltratedCustomers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.Rank }}</td>
        <td>{{ customer.Player }}</td>
        <td>{{ customer.AgeThatYear }}</td>
        <td>{{ customer.Hits }}</td>
        <td>
          <RouterLink :to="`/customer/${customer.id}`">View</RouterLink>
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.id }}</td>
        <td>{{ customer.Rank }}</td>
        <td>{{ customer.Player }}</td>
        <td>{{ customer.AgeThatYear }}</td>
        <td>{{ customer.Hits }}</td>
        <td>
          <RouterLink :to="`/customer/${customer.id}`">View</RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  customers: Array,
  FiltratedCustomers: Array,
});
</script>

<style scoped>
table {
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
}
table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
table th,
table td {
  padding: 12px 15px;
}
table tbody tr {
  border-bottom: 1px solid #dddddd;
  cursor: pointer;
}

table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
table tbody tr:hover {
  color: #009879;
}
</style>