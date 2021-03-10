<template>
  <figure v-if="container">
    <img :src="source.includes('http') ? source : require(`@/assets/images/${source}`)" :alt="alt" />
  </figure>

  <img v-else :src="source.includes('http') ? source : require(`@/assets/images/${source}`)" :alt="alt" />
</template>
<script src="./index.js"></script>
