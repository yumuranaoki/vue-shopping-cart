<template>
  <div class="hello">
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        {{ item.price }}
        <button @click="add(item.id, item.name)">add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapMutations, mapGetters } from 'vuex';

interface Item {
  id: number,
  name: string,
  price: number
}

@Component({
  computed: mapGetters(['selected']),
})
export default class ItemList extends Vue {
  items : Array<Item> = [
    { id: 1, name: 'umbrella', price: 1000 },
    { id: 2, name: 'nife', price: 1500 },
    { id: 3, name: 'bell', price: 500 },
  ]

  add(id, name): void {
    this.$store.commit('add', { id, name, amount: 1 })
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
