<template>
  <div class="loading">
    <div class="loading:default" :style="`background-color:${background}`">
        <div><i v-for="i in 3" :key="i" :style="`background-color: ${dots}`" /></div>
      </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
