<template>
  
  <header class="Header [ row fluid no-gutter ]">

    <div class="Header__icons [ column xs-10 xs-off-1 ]">

      <a
        href="https://github.com/pawlisiak"
        target="_blank"
        rel="noopener"
      >
        Github
        <svg><use href="#Icon--github"/></svg>
      </a>

      <a
        href="https://www.behance.net/inksze"
        target="_blank"
        rel="noopener"
      >
        Behance
        <svg><use href="#Icon--behance"/></svg>
      </a>

      <a
        href="https://dribbble.com/pawlisiak"
        target="_blank"
        rel="noopener"
      >
        Dribbble
        <svg><use href="#Icon--dribbble"/></svg>
      </a>

    </div>

  </header>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.Header {
  position: fixed;
  z-index: 999;
  height: 0;

  &__icons {
    display: flex;
    justify-content: flex-end;
    transform: translateY(60px);

    a {
      width: 36px;
      height: 36px;
      margin-left: 20px;
      font-size: 0;
      background-color: white;
      border-radius: 50%;
      box-shadow: 0 0 0 rgba(black, 0);
      will-change: transform;
      transition: .5s;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 10px 40px rgba(black, .1);
      }

      &:last-child {
        margin-right: -18px;
      }

      svg {
        width: 20px;
        height: 20px;
        margin: 8px;
        fill: $color-gray-dark;
      }
    }
  }
}
</style>

