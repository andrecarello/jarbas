<template>
  <div class="skeleton:search">
    <div class="skeleton:search-content" v-for="i in 3" :key="i">
      <div class="skeleton:search-figure" />
      <div class="skeleton:search-body">
        <div v-for="j in 4" :key="j"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
