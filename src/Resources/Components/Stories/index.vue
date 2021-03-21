<template>
  <section class="_c:stories">
    <nav class="_c:stories-nav">
      <slot v-for="story in stories">
        <slot v-for="data in story">
          <a href="">
            <load-image :source="data.avatar + '.jpg'" :alt="data.user" />
          </a>
        </slot>
      </slot>
    </nav>
    <!-- <section class="_c:stories">
      <div class="_c:stories-content">
        <story
          :slides="story"
          v-for="(story, index) in stories"
          :key="index"
          ref="stories"
        />
      </div>
    </section> -->
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
