<template>
  <div class="checkout:plan">
    <div class="checkout:plan-text">
      <span>Selecionado</span>
    </div>
    <div class="checkout:plan-description">
      <div class="checkout:plan-row">
        <div
          class="checkout:plan-data"
          data-text="Abra sua conta no c6 Bank e garanta 4GB de bonus."
        >
          <!-- PLAN DATA -->
          <p>
            {{ 4 + Number(plan.data) + Number(plan.data_bonus) }}GB
            <small>
              ({{ Number(plan.data) + Number(plan.data_bonus) }}GB + 4GB*)
            </small>
          </p>
          <!-- PLAN DATA -->
        </div>
        <div class="checkout:plan-price">
          <p>
            R$
            <span v-text="plan.price.split('.')[0]" />
            <sup v-text="',' + plan.price.split('.')[1]" />
            <sub>/MÊS</sub>
          </p>
          <small>no cartão de crédito</small>
        </div>
      </div>
      <div class="checkout:plan-row">
        <oston-checkout-payment-apps title="Apps inclusos" :apps="plan.apps" />
        <oston-checkout-payment-apps
          title="Grátis por 3 meses"
          :apps="plan.apps_bonus"
        />
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
