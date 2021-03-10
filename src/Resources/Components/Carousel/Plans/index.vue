<template>
  <section class="_plans">
    <p class="_plans:text" v-if="title">{{ title }}</p>

    <vue-slick-carousel
      v-if="!loadingPlans && plans.length > 0"
      :arrows="true"
      :dots="false"
      :centerMode="true"
      centerPadding="0"
      :draggable="true"
      :autoplay="false"
      :infinite="false"
    >
      <template #prevArrow="arrowOption">
        <div
          class="_plans:arrow-left"
          :count="arrowOption.currentSlide + 1 + ' of ' + arrowOption.slideCount"
        >
          <feather name="chevron-left" />
        </div>
      </template>

      <template #nextArrow="arrowOption">
        <div
          class="_plans:arrow-right"
          :count="arrowOption.currentSlide + 1 + ' of ' + arrowOption.slideCount"
        >
          <feather name="chevron-right" />
        </div>
      </template>

      <oston-item v-for="(plan, index) in plans" :key="index" :plan="plan" :incentive="incentive"/>
    </vue-slick-carousel>
    <skeleton v-else/>
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
