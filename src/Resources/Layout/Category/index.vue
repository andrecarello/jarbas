<template functional>
  <section class="layout:category" :class="props.layout || ''">
    <header class="layout:category-header">
      <router-link to="/ofertas">
        <oston-image
          class="layout:category-brand"
          source="tim-brand-full.svg"
          alt="Tim"
        />
      </router-link>
      <router-link to="/ofertas" class="layout:category-close">
        <feather name="x" />
      </router-link>
    </header>
    <h1 class="layout:category-title">{{ props.title }}</h1>
    <h2 class="layout:category-subtitle">{{ props.subtitle }}</h2>

    <main class="layout:category-content">
      <slot></slot>
    </main>
  </section>
</template>

<style lang="scss" src="./index.scss"></style>
