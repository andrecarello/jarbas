<template>
  <div class="checkout:error">
    <header class="checkout:error-header">
      <router-link to="/" @click.native="logout">
        <oston-image
          class="checkout:error-brand"
          source="tim-logo.svg"
          alt="Tim"
        />
      </router-link>
    </header>

    <section class="checkout:error-content">
      <oston-container>
        <div class="checkout:error-icon">
          <feather name="x" />
        </div>

        <p class="checkout:error-subtitle">
          <slot v-if="error === 'DEFAULT'">
            Infelizmente você não<br />
            pode adquirir um<br />
            <strong>Plano Controle agora.</strong>
          </slot>

          <slot v-else-if="error === 'INELIGIBLE'">
            <slot v-if="plan.length">
              Infelizmente você não pode adquirir o plano:&nbsp;
              <strong>
                {{ plan.name_display }}
                {{ Number(plan.data) + Number(plan.data_bonus) + 4 }}GB.
              </strong>
            </slot>
            <slot v-else>
              Infelizmente você não pode adquirir um plano <strong>Tim Controle</strong> agora.
            </slot>
          </slot>

          <slot v-else-if="error === 'ACTIVATED'">
            Já existe um pedido ativado para este telefone!
          </slot>
        </p>

        <router-link to="/" @click.native="logout" class="_btn _btn:white">
          Alterar número
        </router-link>
      </oston-container>
    </section>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
