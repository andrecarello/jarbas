<template functional>
  <article
    :class="[
      '_c:carousel-item',
      props.index ? '_c:carousel-item-active' : '',
    ]"
  >
    <load-image
      class="_c:carousel-image"
      :source="props.image"
      :alt="props.title"
    />
    <div class="_c:carousel-content">
      <div class="_c:carousel-arc" />

      <h1 v-if="props.title" v-text="props.title" class="_c:carousel-title" />
      <p
        v-if="props.subtitle"
        v-text="props.subtitle"
        class="_c:carousel-subtitle"
      />
    </div>
  </article>
</template>
