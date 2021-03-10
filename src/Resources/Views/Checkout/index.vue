<template>
  <router-view :key="$route.fullPath + Math.random()" />
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
