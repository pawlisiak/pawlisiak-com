<template>

  <div
    class="Dropdown"
  >

    <div
      @click="toggleDropdown"
      class="Dropdown__handler"
    >

      <slot name="handler"/>

    </div>

    <div
      :class="{ 'is-opened': isOpened }"
      class="Dropdown__dialog"
    >

      <section>
        <slot name="dialog"/>
      </section>

    </div>

  </div>

</template>

<script>
export default {
  name: 'Dropdown',

  data () {
    return {
      isOpened: false
    }
  },

  methods: {
    closeDropdown () {
      this.isOpened = false

      this.$nextTick(() => {
        document.body.removeEventListener('click', this.closeDropdown, false)
      })
    },

    toggleDropdown () {
      this.isOpened = !this.isOpened

      this.$nextTick(() => {
        document.body.addEventListener('click', this.closeDropdown, false)
      })
    }
  }
}
</script>

<style lang="scss">
.Dropdown {
  display: inline-block;
  position: relative;

  &__handler {
    position: relative;
    z-index: +11;
  }

  &__dialog {
    position: absolute;
    z-index: 999;
    top: calc(100% + 12px);
    right: 0;
    max-width: 640px;
    max-height: calc(100vh - 200px);
    padding: 12px 24px;
    background-color: $color-gray-lighter;
    box-shadow: 0 20px 100px rgba(black, .1);
    transition: .25s;

    > section {
      overflow-y: auto;
    }

    &::before {
      content: '';
      position: absolute;
      top: -9px;
      right: 26px;
      border-bottom: 9px solid $color-gray-lighter;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    &:not(.is-opened) {
      visibility: hidden;
      z-index: 998;
      transform: translateY(10px);
      opacity: 0;
    }
  }

  &__overlay {
    position: fixed;
    z-index: +10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
