<template>
  <section class="checkout">
    <header class="checkout:header">
      <router-link to="/" @click.native="reset">
        <oston-image
          :container="true"
          class="checkout:brand"
          source="tim-brand-full.svg"
          alt="Tim"
        />
      </router-link>

      <div class="checkout:steps">
        <div
          class="checkout:step"
          v-for="i in 3"
          :key="i"
          :class="step >= i ? 'checkout:step-active' : ''"
          v-text="i"
        />
      </div>
    </header>
    <div class="checkout:container">
      <h1 v-if="title" v-html="title" class="checkout:title" />
      <slot></slot>
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
