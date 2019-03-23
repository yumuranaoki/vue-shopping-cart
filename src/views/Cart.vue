<template>
  <div>
    <h1>Your Cart</h1>
    <ul>
      <li v-for="item in selected" :key="item.id">
        {{ item.name }}
        {{ item.amount }}
        <button @click="remove(item.id)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from 'vuex';

@Component({
  computed: mapState({
    selected: state => state.selected,
  })
})
export default class Cart extends Vue{
  remove(id) {
    this.$store.commit('remove', { id })
  }
}
</script>

<style>
ul {
  list-style: none;
}
</style>
