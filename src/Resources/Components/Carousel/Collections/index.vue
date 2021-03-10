<template>
  <section class="_collections">
    <header class="_collections:header">
      <h1 class="_collections:title" v-text="title" />
    </header>
    <div class="_collections:content">
      <oston-collections-item
        v-for="(offer, index) in content"
        :key="index"
        :content="offer"
        :logged="!!loggedIn"
        :theme="theme"
        :collection="title"
      />
      <div class="_collections:more">
        <router-link :to="'/colecao/' + link.id + '/' + link.slug" @click.native="select(link.id)">
          <div>
            <feather name="chevron-right" />
          </div>
          <span>VER TODAS</span>
        </router-link>
      </div>
      <div class="_collections:spacer" />
    </div>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
