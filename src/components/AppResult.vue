<template>
  <div class="result">
    <ul
      v-if="resultContent.length"
      class="result__list"
    >
      <li
        v-for="item in resultContent"
        :key="'contentResult' + item.id"
        class="result__item"
      >
        id: {{ item.id }}
        amount: {{ item.amount }}
      </li>
    </ul>
    <div v-else>
      Контент не выбран
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppResult',
  computed: {
    resultContent() {
      return this.$store.getters.getResultContent;
    },
  },
};
</script>

<style scoped>
.result {
  width: 25%;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 30px;
  padding-left: 30px;
}

.result--left {
  border-right: 1px solid #000;
}

.result--right {
  border-left: 1px solid #000;
}

.result__item {
  padding: 5px 0;
}
</style>
