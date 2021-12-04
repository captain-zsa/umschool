import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const generateContent = function () {
  let array = [];
  let min = -1000;
  let max = 1000;
  let i = 1;

  for (i; i <= 100; i++) {

    min = Math.ceil(min);
    max = Math.floor(max);

    array.push({
      id: i,
      amount: Math.floor(Math.random() * (max - min)) + min,
    });
  }

  return array;
};

const sortArray = function (field) {
  return (last, now) => last[field] > now[field] ? 1 : -1;
};

export default new Vuex.Store({
  state: {
    content: generateContent(),
    filterAmount: 1, // по-умолчанию показываем все
    filterOrder: false, // без сортировки
    resultContent: [],
  },
  getters: {
    filtered(state) {
      let array = [...state.content];

      if (state.filterAmount === 2) { // показ меньше 0
        array = array.filter(function(item) {
          return item.amount < 0 ?? item;
        });
      }

      else if (state.filterAmount === 3) { // показ больше 0
        array = array.filter(function(item) {
          return item.amount > 0 ?? item;
        });
      }

      if (state.filterOrder) { // сортировка от бОльшего к меньшему
        array = array.sort(sortArray('amount'));
      }

      return array;
    },

    getResultContent(state) {
      let array = [...state.content];

      return state.resultContent.length ? array.filter(function(item) {
        return state.resultContent.indexOf(item.id) !== -1 ?? item;
      }) : [];
    },
  },
  mutations: {
    editOrder(state) {
      state.filterOrder = !state.filterOrder
    },

    radioEdit(state, value) {
      state.filterAmount = value;
    },

    editResultContent(state, arrayContent) {
      state.resultContent = arrayContent;
    }
  },
});
