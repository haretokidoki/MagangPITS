<script>
import Home from './views/HomePage.vue'
import Document from './views/DocumentPage.vue'
import Login from './views/LoginPage.vue'
import NotFound from './views/NotFound.vue'

const routes = {
  '/': Home,
  '/document': Document,
  '/login': Login,
  '/notfound': NotFound
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <component :is="currentView" />
</template>
