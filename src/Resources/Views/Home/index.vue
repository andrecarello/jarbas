<template>
  <section class="home">
    <header class="home:header">
      <oston-image
        :container="true"
        source="tim-brand-full.svg"
        alt="TIM"
        class="home:brand"
      />

      <p class="home:text">
        Migre seu número para o TIM Controle.<br />Abra sua conta no C6 Bank<br />e
        ganhe muito mais internet!
      </p>
    </header>

    <a
      href="/checkout/plan/TIM_CONTROLE_GIGA_B_PROMO"
      @click.prevent.stop="select('TIM_CONTROLE_GIGA_B_PROMO')"
    >
      <oston-image
        :container="true"
        source="banners/banner-home.jpg"
        alt="alt"
        class="home:banner"
      />
    </a>

    <oston-container>
      <oston-carousel-plans />

      <div class="promo:banners">
        <router-link
          v-for="promo in promos"
          :key="promo.alt"
          to="pesquisa"
          :title="promo.alt"
          @click.native="search(promo.q)"
        >
          <oston-image
            :source="'banners/banner-' + promo.img + '.png'"
            :alt="promo.alt"
          />
        </router-link>

        <router-link
          v-for="promo in offers"
          :key="promo.alt"
          :to="'/oferta/' + promo.id + '/' + slugify(promo.name)"
          @click.native="selectOffer(promo.id)"
          :title="promo.alt"
        >
          <oston-image
            :source="'banners/banner-' + promo.img + '.png'"
            :alt="promo.alt"
          />
        </router-link>
      </div>
    </oston-container>

    <oston-tip-discount />
  </section>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
