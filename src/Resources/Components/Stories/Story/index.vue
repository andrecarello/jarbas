<template>
  <div
    :class="['_story', active === $parent.initial ? '_story-active' : '']"
  >
    <div class="_story:timeline">
      <div class="_story:slice" v-for="index in slides.length" :key="index">
        <div class="_story:progress" />
      </div>
    </div>
    <div class="_story:content">
      <div class="_story:slide" v-for="slide in slides" :key="slide.id">
        <load-image :source="slide.image + '.jpg'" :alt="slide.alt" />
      </div>
    </div>
  </div>
  <!-- <div class="_story">
    <div class="_story:timeline" ref="timeline">
      <div class="_story:slice" v-for="(slide, i) in slides" :key="i">
        <div class="_story:progress" />
      </div>
    </div>
    <div class="_story:slide">
      <load-image :source="slides[currentSlideIndex].image + '.jpg'" :alt="slides[currentSlideIndex].image" />

      <div class="_story:caption">
        <h1>{{ slides[currentSlideIndex].alt }}</h1>
        <p><a href="">{{ slides[currentSlideIndex].url }}</a></p>
      </div>
    </div>
  </div> -->
</template>

<script src="./index.js"></script>
