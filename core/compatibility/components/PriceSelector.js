// replaced with generic ProductCustomOption
export default {
  name: 'PriceSelector',
  props: {
    content: {
      type: null,
      default: ''
    },
    code: {
      type: null,
      required: true
    },
    context: {
      type: null,
      default: ''
    }
  },
  data () {
    return {
      active: false,
      from: 0,
      to: 0
    }
  },
  beforeMount () {
    this.$bus.$on('filter-reset', this.filterReset)
    this.$bus.$on('filter-changed-' + this.context, this.filterChanged)
  },
  beforeDestroy () {
    this.$bus.$off('filter-reset', this.filterReset)
    this.$bus.$off('filter-changed-' + this.context, this.filterChanged)
  },
  methods: {
    filterChanged (filterOption) {
      if (filterOption.attribute_code === this.code) {
        if (filterOption.id === this.id) {
          if (this.active) {
            this.active = false
          } else {
            this.active = true
          }
        } else {
          this.active = false
        }
        // filterOption.id === this.id ? this.active = true : this.active = false
      }
    },
    filterReset (filterOption) {
      this.active = false
    },
    switchFilter (from, to) {
      this.$bus.$emit('filter-changed-' + this.context, { attribute_code: this.code, from: from, to: to })
    }
  }
}
