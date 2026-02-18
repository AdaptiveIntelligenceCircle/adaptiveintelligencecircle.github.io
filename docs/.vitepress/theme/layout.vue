<script setup>
import { useData, useRoute } from 'vitepress'
import AICNav from './components/AICNav.vue'
import AICFooter from './components/AICFooter.vue'

const { frontmatter } = useData()
const route = useRoute()
</script>

<template>
  <div class="aic-root">

    <AICNav />

    <main class="aic-main">
      <div v-if="route.path === '/'" class="landing">
        <Content />
      </div>

      <div v-else class="reading">
        <Content />
      </div>
    </main>

    <AICFooter />

  </div>
</template>
