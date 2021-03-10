<template functional>
  <section class="error">
    <header class="error:header">
      <router-link to="/ofertas">
        <oston-image
          :container="true"
          class="error:brand"
          source="tim-brand-full.svg"
          alt="Tim"
        />
      </router-link>
    </header>

    <h1 v-if="props.title" v-html="props.title" class="error:title" />
    <slot></slot>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
