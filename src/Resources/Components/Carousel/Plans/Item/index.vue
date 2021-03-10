<template>
  <div style="width: 100%">
    <article class="_plans:item" :id="plan.code">
      <header
        class="_plans:header"
        data-after-text="*Abra sua conta no c6 Bank e garanta 4GB de bônus"
      >
        <h2
          class="_plans:title"
          :data-ic-plano="slugify(plan.name)"
          :data-ic-franquia="total([4, plan.data, plan.data_bonus], 'gb')"
        >
          {{ total([4, plan.data, plan.data_bonus], "GB") }}
          <small
            >({{ total([plan.data, plan.data_bonus], "GB + 4GB*") }})</small
          >
        </h2>
      </header>
      <div class="_plans:content">
        <div style="flex-grow: 1">
          <oston-apps title="Apps inclusos" :content="plan.apps" />
          <oston-apps
            :title="'Grátis por ' + plan.apps_bonus_validity + ' meses'"
            :content="plan.apps_bonus"
            v-if="plan.apps_bonus"
          />
        </div>
        <oston-price
          :unity="plan.price.split('.')[0]"
          :tenths="plan.price.split('.')[1]"
        />
      </div>
      <footer class="_plans:footer">
        <div
          class="_plans:more"
          :class="benefitsIsOpen ? 'active' : ''"
          @click="benefitsIsOpen = !benefitsIsOpen"
        >
          <feather name="chevrons-down" />
        </div>
        <a
          href="/checkout/telefone"
          @click.prevent="select(plan)"
          class="_plans:button"
          data-ic-trigger="sec-contratacao-cards"
        >
          <slot v-if="loading">Aguarde</slot>
          <slot v-else>Contratar agora</slot>
        </a>
      </footer>

      <oston-benefits
        v-if="benefitsIsOpen"
        :note="plan.note"
        :bundles="plan.bundles"
        :data="plan.data"
        :name="slugify(plan.name)"
      />
    </article>
  </div>
</template>

<script src="./index.js"></script>
