<template>
  <div class="_skeleton:category">
    <article class="_skeleton:category-article" v-for="i in 3" :key="i">
      <div class="_skeleton:category-figure" />

      <div class="_skeleton:category-content">
        <div v-for="i in 2" :key="i" />
      </div>
      <div class="_skeleton:category-footer" />
    </article>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
