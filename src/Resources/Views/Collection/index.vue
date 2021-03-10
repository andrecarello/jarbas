<template>
  <oston-layout
    :layout="'collection theme:' + theme"
    title="Aproveite todas as suas TIM Ofertas"
    :subtitle="loading ? 'Aguarde...' : collection.name"
  >
    <skeleton v-if="loading" />
    <oston-card-offer
      v-else
      v-for="(offer, index) in collection.offers"
      :key="index"
      :offer="offer"
      :slug="slugify(offer.title)"
      :category="collection.name"
      :logged="!loggedIn"
    />
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
