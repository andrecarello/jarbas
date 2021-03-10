<template>
  <menu class="_menu">
    <router-link to="/" class="_menu:brand">
      <oston-image source="tim-brand-full.svg" alt="TIM" />
    </router-link>

    <a
      v-if="!loggedIn"
      href="/session/login"
      class="_menu:link"
      @click.prevent="$parent.loginIsOpen = true"
    >
      <feather name="log-in" />
    </a>
    <a v-else href="/session/logout" class="_menu:link" @click.prevent="logout">
      <feather name="log-out" />
    </a>

    <a
      href="/searchbar/open"
      @click.prevent="isSearchBarOpen = true"
      class="_menu:link"
    >
      <feather name="search" />
    </a>
    <a href="/toggle/menu" class="_menu:link" @click.prevent.stop="toggle">
      <feather name="menu" />
    </a>

    <form class="_menu:form" v-if="isSearchBarOpen">
      <input
        type="text"
        placeholder="Digite um produto ou uma marca ..."
        v-model="form.search"
      />
      <a :href="'/search?q=' + form.search" @click.prevent="search">
        <feather name="search" />
      </a>
      <a href="/searchbar/close" @click.prevent="isSearchBarOpen = false">
        <feather name="x" />
      </a>
    </form>

    <div class="_menu:content" v-if="isOpen">
      <div class="_menu:left" data-version="v0.9.5">
        <span>CATEGORIAS</span>
      </div>
      <div class="_menu:right">
        <router-link
          v-for="(category, index) in categories"
          :key="index"
          :to="'/categoria/' + category.id + '/' + slugify(category.name)"
          class="_menu:content-link"
          @click.native="ga(category)"
          >{{ category.name }}</router-link
        >
        <div class="_menu:footer">
          <div class="_menu:content-link">Minhas Preferências</div>
          <div class="_menu:content-link">Perguntas Frequentes</div>
          <div class="_menu:content-link">Termos de Uso</div>
        </div>
      </div>
    </div>

    <div v-if="loading.logout" class="_menu:logout">Aguarde...</div>
  </menu>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
