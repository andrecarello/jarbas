<template>
  <oston-layout
    :layout="'search theme:' + theme"
    title="Aproveite todas as suas TIM Ofertas"
    :subtitle="loading ? 'Aguarde...' : 'RESULTADOS PARA A BUSCA: ' + term"
  >
    <skeleton v-if="loading && offers.length === 0" />
    <slot v-else>
      <slot v-if="offers.length > 0">
        <oston-card-offer
          v-for="(offer, index) in offers"
          :key="index"
          :offer="offer"
          :slug="slugify(offer.title)"
          :logged="!loggedIn"
          category="Pesquisa"
        />

        <a
          v-if="page < lastPage"
          href=""
          :class="['_btn _btn:red', loadingMore ? '_btn:loading' : '']"
          @click.prevent="more"
        >
          <span v-if="loadingMore" />
          <span v-else>Carregar mais</span>
        </a>
      </slot>
      <slot v-else-if="offers.length === 0">
        <p>Ops! Infelizmente sua busca não obteve resultado.</p>

        <input type="text" v-model="form.term" />
        <a href="/search" @click.prevent="search">
          <feather name="search" />
        </a>
      </slot>
    </slot>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
