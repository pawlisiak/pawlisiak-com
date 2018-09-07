<template>

  <button
    @click.prevent="callback"
    :class="{ 'Button--small': (size === 'sm'),
              'Button--large': (size === 'lg'),
              'Button--invert': (type === 'invert'),
              'Button--transparent': (type === 'transparent')}"
    class="Button"
  >

    <slot/>

  </button>

</template>

<script>
export default {
  name: 'Button',

  props: {
    callback: {
      type: Function,
      required: false,
      default: () => {}
    },

    type: {
      type: String,
      default: null
    },

    size: {
      type: String,
      default: 'md',

      validator (value) {
        return ['sm', 'md', 'lg'].indexOf(value) > -1
      }
    }
  }
}
</script>

<style lang="scss">
.Button {
  $this: &;

  padding: .8em 1.5em .7em;
  font-family: $font-family-heading;
  font-size: $font-size-base;
  letter-spacing: .15em;
  line-height: 1em;
  text-transform: uppercase;
  color: white;
  background-color: $color-gray-dark;
  border: 0;
  border-radius: 1.5em;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &--small {
    font-size: $font-size-small;
  }

  &--large {
    font-size: 20px;
  }

  &--invert {
    color: $color-gray-dark;
    background-color: white;
  }

  &--transparent {
    font-weight: 700;
    color: $color-gray-dark;
    background: transparent;
  }
}
</style>
