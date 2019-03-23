<template>
  <div>
    <span>cart</span>
    <span>{{ count }}</span>
  </div>  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['count'])
})
export default class CartIcon extends Vue {
}
</script>
