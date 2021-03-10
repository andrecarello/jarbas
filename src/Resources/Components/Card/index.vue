<template>
  <router-link
    :to="'/oferta/' + offer.id + '/' + slug"
    class="card:offer-link"
    @click.native="ga"
  >
    <article class="card:offer-container">
      <oston-intersepted-image
        :source="offer.image_tertiary"
        :alt="offer.subtitle"
        class="card:offer-figure"
      />
      <div class="card:offer-content">
        <h1 class="card:offer-title" v-text="offer.title" />
        <p class="card:offer-company" v-text="offer.company_name" />
      </div>
      <div class="card:offer-footer" v-text="offer.discount" />
      <oston-image
        v-if="logged"
        :container="true"
        class="card:offer-logged"
        source="exclusive-tim-controle.png"
        alt=""
      />
    </article>
  </router-link>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
