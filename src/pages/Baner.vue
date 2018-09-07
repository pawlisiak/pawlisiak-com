<template>

  <section class="Baner [ row fluid no-gutter ]">

    <div class="Baner__content [ column xs-10 xs-off-1 sm-8 lg-6 xl-4 ]">

      <h1>
        <small>Hello! I am</small>
        Tomasz<br>
        Pawlisiak
      </h1>

      <p>I am 30 years old creative front-end developer and high-end graphic designer from Silesia. Highly motivated, decisive and results-oriented individual. It would be great to work with You!</p>

    </div>

    <div class="Baner__buttons [ column xs-10 xs-off-1 ]">

      <ui-button
        :callback="buttonCallback"
      >
        
        Write to me
        
      </ui-button>

      <ui-dropdown>

        <ui-button
          slot="handler"
          type="transparent"
        >

          Check my bio

          <i class="dropdown-arrow"></i>

        </ui-button>

        <template
          slot="dialog"
        >

          <a
            href="https://www.linkedin.com/in/tomasz-pawlisiak-66822953/"
            target="_blank"
            rel="noopener"
          >

            Linkedin

          </a>

          <a
            href="/download/pawlisiak__cv.pdf"
            download
            target="_blank"
          >

            Download PDF

          </a>

        </template>

      </ui-dropdown>

    </div>

    <div class="Baner__grid [ column xs-12 ][ row ]">
      <i class="[ column xs-2 xs-off-4 sm-off-2 lg-1 lg-off-1 ]"></i>
      <i class="[ column xs-2 xs-off-2 lg-1 lg-off-1 ]"></i>
      <i class="[ column xs-hidden xs-off-2 sm-2 lg-1 lg-off-1 ]"></i>
      <i class="[ column xs-hidden sm-hidden md-hidden lg-1 lg-off-1 ]"></i>
      <i class="[ column xs-hidden sm-hidden md-hidden lg-1 lg-off-1 ]"></i>
      <i class="[ column xs-hidden sm-hidden md-hidden lg-1 lg-off-1 ]"></i>
    </div>

    <div class="Baner__image">

      <img
        @load="completeImageLoading"
        :class="{ 'is-loaded': imageIsLoaded }"
        src="@/assets/images/pawlisiak.png"
        alt="Background image"
      >

    </div>

  </section>

</template>

<script>
export default {
  name: 'Baner',

  data () {
    return {
      imageIsLoaded: false
    }
  },

  methods: {
    completeImageLoading () {
      this.imageIsLoaded = true
    },

    buttonCallback () {
      window.location.href = 'mailto:tomasz@pawlisiak.com'
    }
  }
}
</script>

<style lang="scss">
.Baner {
  position: relative;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 1/12 * 100vh;
  padding-bottom: 1/12 * 100vh;
  overflow: hidden;

  &__content {
    margin-bottom: 60px;

    @include breakpoint (md down) {
      color: $color-gray-dark;
    }

    h1 {
      margin-top: 0;
      margin-bottom: 60px;
      color: white;

      @include breakpoint (md down) {
        font-size: 64px;
        line-height: 60px;
      }

      small {
        display: block;
        margin-bottom: 20px;
        font-family: $font-family-base;
        font-size: $font-size-small;
        font-weight: 700;
        line-height: 1em;
        text-transform: uppercase;
        letter-spacing: .3em;
        color: $color-gray-dark;
      }
    }
  }

  &__buttons {
    white-space: nowrap;

    .Dropdown {
      margin-left: 20px;

      &__dialog {
        font-size: $font-size-small;
        text-transform: uppercase;
        letter-spacing: .2em;

        a {
          display: block;
          color: $color-gray;

          &:hover {
            text-decoration: none;
            color: $color-gray-dark;
          }
        }
      }
    }

    .dropdown-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      margin-left: 10px;
      background: white;
      border-radius: 50%;

      &::before {
        content: '';
        display: block;
        width: 0;
        border-top: 5px solid $color-gray-dark;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }
    }
  }

  &__grid {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100% !important;
    height: 100%;
    margin: 0 !important;
    padding: 0 $grid-container-padding !important;

    i {
      border-left: 1px solid rgba(black, .1);
    }
  }

  &__image {
    position: absolute;
    top: 1/12 * 100vh;
    right: 0;
    z-index: -1;

    @include breakpoint (lg down) {
      right: -40%;
    }

    @include breakpoint (md down) {
      opacity: .4;
    }

    img {
      max-width: 110vw;
      transition: opacity 4s,
                  filter 3s;

      &:not(.is-loaded) {
        filter: blur(20px);
        opacity: 0;
      }
    }
  }
}
</style>
