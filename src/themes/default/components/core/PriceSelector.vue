<template>
  <div>
    <input name="from" type="number" v-model="from">
    <input name="to" type="number" v-model="to">

    <button
      type="button"
      @click="switchFilter(from, to)"
    >
      Set range
    </button>
  </div>
</template>

<script>
import PriceSelector from '@vue-storefront/core/compatibility/components/PriceSelector'

export default {
  mixins: [PriceSelector]
}
</script>

<style lang="scss" scoped>
  @import '~theme/css/variables/colors';
  @import '~theme/css/helpers/functions/color';
  $color-event: color(tertiary);
  $color-active: color(accent);

  .price-selector {
    width: 20px;
    height: 20px;

    &:hover {
      .square {
        background-color: $color-event;
      }
    }

    &.active {
      .square {
        background-color: $color-active;
      }
    }
  }

  .square {
    width: 80%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
</style>
