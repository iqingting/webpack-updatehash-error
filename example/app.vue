<script>
import ShopView from '../src/shopview'

export default {
  data() {
    return {
      message: 'TypeError: Data must be a string or a buffer'
    }
  },
  components: {
    'shop-view': ShopView,
  },
}
</script>

<template>
  <div>
    <shop-view></shop-view>
  </div>
</template>
