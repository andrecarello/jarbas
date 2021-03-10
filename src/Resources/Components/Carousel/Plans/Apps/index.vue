<template>
  <div class="_plans:apps">
    <p class="_plans:apps-title">{{ title }}</p>
    <oston-image
      v-for="(app, index) in content.split(',')"
      :key="index"
      :source="'apps/' + app.trim() + '.svg'"
      :alt="app.toUpperCase()"
      class="_plans:apps-brand"
    />
  </div>
</template>

<script src="./index.js"></script>
