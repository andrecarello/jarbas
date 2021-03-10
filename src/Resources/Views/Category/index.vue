<template>
  <oston-layout
    :layout="'category theme:' + theme"
    title="Aproveite todas as suas TIM Ofertas"
    :subtitle="loading ? 'Aguarde...' : category.name"
  >
    <skeleton v-if="loading" />
    <oston-card-offer
      v-else
      v-for="(offer, index) in category.offers"
      :key="index"
      :offer="offer"
      :slug="slugify(offer.title)"
      :category="category.name"
    />
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
