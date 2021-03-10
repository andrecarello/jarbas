<template functional>
  <div class="checkout:plan-apps" v-if="props.apps">
    <p v-if="props.title">Apps inclusos</p>
    <oston-image
      v-for="(app, index) in props.apps.split(',')"
      :key="index"
      :source="'apps/' + app.trim().toLowerCase() + '.svg'"
      :alt="app.toUpperCase()"
    />
  </div>
</template>
