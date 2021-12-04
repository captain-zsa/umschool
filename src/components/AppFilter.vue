<template>
  <div class="filter">
    <ul class="filter__list">
      <li
        v-for="itemRadio in radio"
        :key="'radio' + itemRadio.value"
        class="filter__item filter__item--radio"
      >
        <label>
          <input
            :value="itemRadio.value"
            type="radio"
            name="amount"
            v-model="radioActive"
          >
          {{ itemRadio.label }}
        </label>
      </li>
    </ul>

    <ul class="filter__list">
      <li
        v-for="itemCheck in checks"
        :key="itemCheck.name"
        class="filter__item filter__item--check"
      >
        <label>
          <input
            :value="itemCheck.value"
            :name="itemCheck.name"
            @change="changeCheckFilter(itemCheck.name)"
            type="checkbox"
          >
          {{ itemCheck.label }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  props: {
    radio: {
      type: Array,
      required: true
    },
    checks: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      radioActive: 1,
    }
  },

  watch: {
    radioActive() {
      this.$store.commit('radioEdit', this.radioActive);
    },
  },

  methods: {
    changeCheckFilter(param) {
      if(param === 'amountSort') {
        this.$store.commit('editOrder');
      }
    },
  },
};
</script>

<style scoped>
.filter {
  width: 25%;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 30px;
  padding-left: 30px;
}

.filter--left {
  border-right: 1px solid #000;
}

.filter--right {
  border-left: 1px solid #000;
}

.filter__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.filter__item label {
  display: block;
  padding: 5px 0;
}

.filter__item label:hover {
  color: green;
  cursor: pointer;
}

.filter__item--check {
  margin-top: 20px;
}
</style>
