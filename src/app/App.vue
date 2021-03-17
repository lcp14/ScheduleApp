<template>
<div>
  <nav-bar></nav-bar>
  <transition name="fade" mode="out-in" appear>
    <router-view></router-view>
  </transition>
  <Footer></Footer>
</div>
</template>

<script>
import { NavBar, Footer } from './components'

export default {
    components: { NavBar, Footer },
    data: () => {
        return {};
    }
}
</script>

<style lang="scss">
@import "./assets/styles.scss";

</style>