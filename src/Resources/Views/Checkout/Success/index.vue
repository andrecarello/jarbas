<template>
  <div class="checkout:success">
    <header class="checkout:success-header">
      <router-link to="/" @click.native="logout">
        <oston-image class="checkout:success-brand" source="tim-logo.svg" alt="Tim" />
      </router-link>
    </header>

    <oston-container>
      <h1 class="checkout:success-title">Pedido realizado<br />com sucesso!</h1>
      <h3 class="checkout:success-subtitle">
        Assim que seu plano estiver ativo, você receberá um
        <strong>SMS com a confirmação.</strong>
      </h3>
    </oston-container>

    <div
      class="checkout:success-footer"
      :style="{ backgroundImage: background }"
    >
      <oston-image
        class="checkout:success-footer-c6"
        source="cartao-c6-bank.png"
        alt="6c bank - imagem do cartão de crédito em tom cinza claro"
      />
      <oston-container>
        <p class="checkout:success-text">
          Abra sua conta no C6 Bank<br />
          e garanta 4GB de bônus<br />por 2 meses.
        </p>
        <div class="checkout:success-footer-bottom">
          <p>
            Mais detalhes em
            <a href="https://www.tim.com.br/c6" target="_blank"
              >tim.com.br/c6</a
            >
          </p>
          <oston-image
            class="c6"
            source="C6Bank.svg"
            alt="c6 bank - logomarca da empresa escrita em branco"
          />
          <div class="checkout:success-separator"></div>
          <oston-image
            class="tim"
            source="tim-logo-invert.svg"
            alt="tim - logomarca da empresa escrita em branco com o logo em vermelho"
          />
        </div>
      </oston-container>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
