<template>
  <intersect @enter="intersected = true">
    <figure class="_intersect:image">
      <transition name="fade">
        <img
          v-bind:alt="alt"
          v-bind:src="source"
          v-on:load="onLoaded"
          v-show="loaded"
          v-if="intersected"
          ref="image"
        />
      </transition>
      <div class="_intersect:loading" v-if="!loaded">
        <span />
      </div>
    </figure>
  </intersect>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
