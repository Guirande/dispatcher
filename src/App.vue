<template>
  <div id="app" class="card">
    <header class="card-header">
      <Head/>
    </header>
    <div class="card-content">
      <div class="content">
        <Map/>
      </div>
    </div>
    <footer class="card-footer">
      <div class="column is-full">
        <Table/>
      </div>
    </footer>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Table from "./components/Table";
import Head from "@/components/Header";
import 'vue-select/dist/vue-select.css';
export default {
  name: 'App',
  components: {
    Table,
    Map,
    Head
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
