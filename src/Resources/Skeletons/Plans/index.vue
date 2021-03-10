<template>
  <div class="_skeleton:plans">
    <div class="_skeleton:plans-row" v-for="i in 6" :key="i * Math.random()" />
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
