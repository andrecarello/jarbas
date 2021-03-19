<template>
  <div>
    <div class="_c:carousel">
      <carousel-item
        v-for="(slide, index) in slides"
        :key="index"
        :image="slide.image"
        :title="slide.title"
        :subtitle="slide.subtitle"
        :index="index + 1 === actual"
      >
      </carousel-item>

      <div class="_c:carousel-dots">
        <div
          :class="[
            '_c:carousel-dot',
            index + 1 === actual ? '_c:carousel-dot-active' : '',
          ]"
          v-for="(dot, index) in slides.length"
          :key="dot"
        />
      </div>
    </div>

    <slot name="actions"></slot>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
