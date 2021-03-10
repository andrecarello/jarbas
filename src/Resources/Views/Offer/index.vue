<template>
  <skeleton v-if="loading" />
  <main :class="'offer theme:' + theme" v-else>
    <header class="offer:header">
      <a href="" @click.prevent="$router.go(-1)" class="offer:close">
        <feather name="x" />
      </a>
      <oston-intersepted-image
        class="offer:figure"
        :source="offer.image_secondary"
        :alt="offer.title"
      />
    </header>

    <main v-if="loggedIn">
      <div class="offer:brand">
        <oston-intersepted-image
          :source="offer.company_logo"
          :alt="offer.company_name"
        />
      </div>

      <h2 class="offer:company" v-text="offer.company_name" />

      <div class="offer:content">
        <div class="offer:content-actions">
          <oston-price
            :content="offer.discount"
            :price="strOnlyNumber(offer.discount)"
          />
          <a
            :href="offer.discount_url"
            @click.prevent="redirect"
            target="_blank"
            class="offer:content-button"
            :class="isLoadingVoucher ? 'offer:content-button-disabled' : ''"
            v-if="!offer.has_code && offer.has_link"
          >
            AVANÇAR
          </a>
          <a
            href=""
            class="offer:content-button"
            :class="isLoadingVoucher ? 'offer:content-button-disabled' : ''"
            @click.prevent="getVoucher"
            v-else
          >
            <slot v-if="isLoadingVoucher">AGUARDE</slot>
            <slot v-else>VER CUPOM</slot>
          </a>
        </div>

        <p class="offer:description" v-if="offer.subtitle">
          {{ offer.subtitle }}
        </p>

        <div class="offer:collapse" :style="'height: ' + height">
          <div ref="collapse">
            <div v-if="offer.rules">
              <h3 class="offer:collapse-title">Regras de uso</h3>
              <p class="offer:collapse-paragraph">{{ offer.rules }}</p>
            </div>

            <div v-if="offer.contact">
              <h3 class="offer:collapse-title">Contato</h3>
              <p class="offer:collapse-paragraph">{{ offer.contact }}</p>
            </div>
          </div>
        </div>
        <div
          @click.prevent="toggle"
          class="offer:collapse-link"
          :class="isCollapseOpen ? 'offer:collapse-link-active' : ''"
        >
          <div><feather name="chevrons-down" /></div>
          <span>{{ isCollapseOpen ? "Menos detalhe" : "Mais detalhes" }}</span>
        </div>
      </div>

      <oston-step :hasCode="offer.has_code" :hasLink="offer.has_link" />

      <footer class="offer:footer">
        <p>
          *Para acessar o site do parceiro é necessário estar conectado à
          internet.
        </p>
      </footer>

      <oston-modal
        :url="offer.discount_url"
        :discount="offer.discount"
        :voucher="voucher"
      />
    </main>

    <oston-carousel-plans
      title="Mude pra TIM CONTROLE e ganhe acesso a um portal de descontos"
      :incentive="true"
      v-else
    />
  </main>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
