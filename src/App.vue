<template>
  <div id="app" class="layout:base">
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>
<style lang="scss">
/*
 Author: André <andrelino.cl@gmail.com>
 Name: Jarbas
 File: app.scss
 Location: /
*/

// -> import core
@import "@/assets/sass/core/settings";
@import "@/assets/sass/core/functions";
@import "@/assets/sass/core/mixins";
@import "@/assets/sass/core/colors";
@import "@/assets/sass/core/fonts";

@import "@/assets/sass/base/global";

@import "@/assets/sass/components/toast";
</style>
