<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <button @click="btnClickSelf">button</button>
    <input v-model="keywords" />
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import useList from "../composables/useList.js";
import filter from "../composables/filter.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const { list, getList } = useList();
    const { keywords, filterList } = filter(list);
    return {
      list: filterList,
      getList,
      keywords,
      filterList,
    };
  },
  methods: {
    btnClickSelf() {
      this.$emit("btnClick", this.keywords);
    },
  },
  // TODO:
  emits: {
    btnClick: (keywords) => {
      // console.log(keywords)
      if (keywords.length > 2) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
