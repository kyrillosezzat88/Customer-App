<template>
  <section class="Home">
    <!-- Sort Bar -->
    <SortBar :HandleSort="HandleSort" />
    <div class="content">
      <!-- Filters  -->
      <FilterBar @FilterData="FilterData" />
      <div class="content_table">
        <!-- Customer Table component -->
        <CustomerTable
          :customers="customers"
          :FiltratedCustomers="FiltratedCustomers"
        />
        <Spinner v-if="isLoading" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import FilterBar from "../components/FilterBar.vue";
import SortBar from "../components/SortBar.vue";
import Spinner from "../components/Spinner.vue";
import CustomerTable from "../components/CustomerTable.vue";
const customers = ref([]);
const FiltratedCustomers = ref(null);
const isLoading = ref(true);


// get data from api after page mounted
onMounted(async () => {
    isLoading.value = true;
    // call api and get data i can use also axios but not need for this simple app
    let res = await fetch(
      "api/hitsSingleSeason"
    );
    let data = await res.json();
    customers.value = data.slice(0,11);
    isLoading.value = false;
});


//Handle Sort Method ( sort by Rank , Hits)
const HandleSort = (e) => {
  // check what user select to sort data if rank or hits
  if (e.target.value == "Rank") {
    // sort data by Rank descending from heigh level to low if you want Ascending just replace the a in the b place and otherwise
    // sort filtreted if user filter data before sort
    FiltratedCustomers.value = FiltratedCustomers.value
      ? FiltratedCustomers.value.sort((a, b) => Number(b.Rank) - Number(a.Rank))
      : null;
    return (customers.value = customers.value.sort(
      (a, b) => Number(b.Rank) - Number(a.Rank)
    ));
  }

  
  //sort data by Hits descending from heigh level to low
  FiltratedCustomers.value = FiltratedCustomers.value
    ? FiltratedCustomers.value.sort((a, b) => b.Hits - a.Hits)
    : null;
  return (customers.value = customers.value.sort((a, b) => b.Hits - a.Hits));
};

//Filter Data by Rank Hits and AgeThatYear
const FilterData = (filter) => {
  FiltratedCustomers.value = customers.value.filter((customer) => {
    // iterate through filter object
    for (let key in filter) {
      // check if user checked this filter or not
      let checkField = customer[key].length ? true : false; // check field if empty or not
      if (filter[key] && filter[key] != checkField) {
        return false;
      }
      return true;
    }
  });
};
</script>

<style scoped>
.Home {
  padding: 50px 0;
}
.content {
  display: flex;
  margin: 25px 0;
}
/* media for mobile responsive  */
@media all and (max-width:640px) {
  .content{
      flex-wrap: wrap;
  }
  .content_table{
      width:100%;
      overflow-x: scroll;
      margin-top: 20px;
  }
}
.content_table {
  min-width: 80%;
}
</style>