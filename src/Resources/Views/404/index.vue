<template>
  <oston-layout title="OPS">
    <oston-container>
      <p class="error:type">
        <span>4</span>
        <oston-image :container="true" source="tim-brand.svg" alt="0" />
        <span>4</span>
      </p>

      <p class="error:text">
        Parece que a página que você está tentando acessar não existe mais.
      </p>
      <p class="error:text">
        <router-link to="/ofertas">Voltar para a página inicial</router-link>
      </p>
    </oston-container>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
