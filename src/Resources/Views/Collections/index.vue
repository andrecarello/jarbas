<template>
  <section class="collections">
    <oston-menu :categories="categories.length > 0 ? categories : []" />
    <oston-tip :logged="loggedIn" />
    <oston-modal-login />

    <skeleton v-if="loading" />
    <oston-collections-carousel
      v-else
      v-for="(collection, index) in collections"
      :key="index"
      :title="collection.name"
      :theme="index"
      :content="collection.offers"
      :link="{ id: collection.id, slug: slugify(collection.name) }"
    />
  </section>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
