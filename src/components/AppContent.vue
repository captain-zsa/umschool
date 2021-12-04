<template>
  <div class="content">
    <ul class="content__list">
      <li
        v-for="itemContent in content"
        :key="'content' + itemContent.id"
        class="content__item"
      >
        <label>
          <input
            :value="itemContent.id"
            name="checkContent"
            type="checkbox"
            v-model="checkedContent"
            @change="addContent()"
          >
          id: {{ itemContent.id }}
          amount: {{ itemContent.amount }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppContent',
  data() {
    return {
      checkedContent: [],
    };
  },
  computed: {
    content() {
      return this.$store.getters.filtered;
    },
  },
  methods: {
    addContent() {
      this.$store.commit('editResultContent', this.checkedContent);
    },
  },
};
</script>

<style scoped>
.content {
  width: 50%;
  box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-right: 30px;
  padding-left: 30px;
  overflow-y: scroll;
}

.content__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.content__item label {
  display: block;
  padding: 5px 0;
}

.content__item label:hover {
  color: green;
  cursor: pointer;
}

.content__item--check {
  margin-top: 20px;
}
</style>
