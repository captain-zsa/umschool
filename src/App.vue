<template>
  <div id="app">
    <app-filter
      class="filter--left"
      :radio="filter.radio"
      :checks="filter.checks"
    />
    <app-content/>
    <app-result class="result--right"/>
  </div>
</template>

<script>
import AppFilter from './components/AppFilter.vue'
import AppContent from './components/AppContent.vue'
import AppResult from './components/AppResult.vue'

export default {
  name: 'App',
  components: {
    AppFilter,
    AppContent,
    AppResult,
  },
  data() {
    return {
      filter: {
        radio: [
          {
            value: 1,
            label: 'Все'
          },
          {
            value: 2,
            label: 'Меньше 0',
          },
          {
            value: 3,
            label: 'Больше или равно 0',
          },
        ],
        checks: [
          {
            value: 1,
            label: 'Сортировка по amount',
            name: 'amountSort',
          },
        ],
      },
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  font-size: 18px;
  display: flex;
}
</style>
