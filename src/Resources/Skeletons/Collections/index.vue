<template>
  <div class="_skeleton:collections">
    <div v-for="i in 2" :key="i * Math.random()">
      <div class="_skeleton:collections-title" />
      <div class="_skeleton:collections-items">
        <div class="_skeleton:collections-col" v-for="i in 5" :key="i">
          <div v-for="i in 4" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
