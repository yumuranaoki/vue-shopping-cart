<template>
  <div class="home">
    <ItemList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemList from "@/components/ItemList.vue"; // @ is an alias to /src

@Component({
  components: {
    ItemList,
  }
})
export default class Home extends Vue {}
</script>
