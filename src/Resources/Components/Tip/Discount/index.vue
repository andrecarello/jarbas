<template functional>
  <footer class="_tip:footer">
    <p class="_tip:footer-title" v-if="props.title" v-text="props.title" />
    <p class="_tip:footer-title" v-else>
      Mude pra TIM Controle<br />e ganhe +200 descontos
    </p>
    <div class="_tip:footer-content">
      <div class="_tip:footer-left">
        <p class="_tip:footer-info">
          <span class="_tip:footer-brand">
            {{ props.brand || "Kit Sephora" }}
          </span>
          <span
            class="_tip:footer-percent"
            data-before-text="Até"
            data-after-text="%"
            >{{ props.percent || 60 }}</span
          >de desconto
        </p>
      </div>
      <div class="_tip:footer-right">
        <oston-image
          :source="props.source || 'tip-sephora.png'"
          :alt="props.alt || 'Kit Sephora com até 60% de desconto'"
        />
      </div>
    </div>
    <router-link
      to="/ofertas"
      title="Coleções de ofertas"
      class="_tip:footer-button"
      >Clique Aqui</router-link
    >
  </footer>
</template>

<style lang="scss" src="./index.scss"></style>
