<template>
  <article>
    <header class="tabs">
      <ul class="rows md:justify-between justify-center space-x-2 relative">
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="tab__a nav-item"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="border-2 -mt-5 rounded-lg md:-mx-1 mx-4">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [],
    }
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name
      })
    },
  },
  created() {
    this.tabs = this.$children
  },
}
</script>
<style scoped>
.nav-item {
  cursor: pointer;
}
.nav-item:hover {
  color: #000;
}
.nav-item.is-active {
  color: #fff;
  background-color: #f9be00;
}
.tab__a {
  background-color: #fef5d9;
}
</style>
