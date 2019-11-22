<template>
  <div>
    <AppHeader />
    <nuxt />
    <Foot />
  </div>
</template>
<script>
import Foot from './AppFooter'
import AppHeader from './AppHeader'
import BaseNav from '@/components/BaseNav'
import BaseDropdown from '@/components/BaseDropdown'
import CloseButton from '@/components/CloseButton'

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    Foot,
    AppHeader
  }
}
</script>