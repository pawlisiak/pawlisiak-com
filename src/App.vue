<template>

  <main class="App">

    <the-header/>

    <baner/>

    <the-footer/>

  </main>

</template>

<script>
import Baner from '@/pages/Baner'
import TheHeader from '@/components/layout/TheHeader'
import TheFooter from '@/components/layout/TheFooter'

export default {
  name: 'App',

  components: {
    Baner,
    TheHeader,
    TheFooter
  }
}
</script>
