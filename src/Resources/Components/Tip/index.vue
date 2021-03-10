<template functional>
  <div class="_tip" layout="home">
    <div class="_tip:contents">
      <oston-image
        v-for="i in 3"
        :key="i"
        class="_tip:image"
        :source="'tip/box-' + i + '.jpg'"
        alt="Migre para TIM CONTROLE"
      />
    </div>

    <router-link to="/ofertas" class="_tip:link" v-if="!!props.logged">
      <small>Mude para</small>
      TIM CONTROLE
      <small>e ganhe um universo</small>
      <span>TIM de ofertas</span>
    </router-link>

    <router-link to="/ofertas" class="_tip:link" v-else>
      TIM CONTROLE
      <small>aproveite o seu universo</small>
      <span>TIM de ofertas</span>
    </router-link>
  </div>
</template>

<style lang="scss" src="./index.scss"></style>
