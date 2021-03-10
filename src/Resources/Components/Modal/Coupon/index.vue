<template>
  <div class="_modal" :class="$parent.isGetVoucher ? '_modal:active' : ''">
    <div class="_modal:backdrop" />
    <div class="_modal:content">
      <a href="" class="_modal:close" @click.prevent="reset">
        <feather name="x" />
      </a>

      <div class="_modal:inner">
        <h4 class="_modal:title">
          Desconto especial <br />de <span>{{ discount }}</span>
        </h4>

        <div class="_modal:copy-to-clipboard">
          <p>Copie e utilize o código abaixo:</p>
          <input
            type="text"
            :value="voucher"
            :style="{ fontSize: count(voucher) }"
            readonly
          />

          <button
            type="button"
            v-clipboard:copy="voucher"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >
            <slot v-if="isCopiedVoucher"><feather name="check" /></slot>
            <slot v-else><feather name="copy" /><span>Copiar</span></slot>
          </button>
        </div>

        <a
          :href="url"
          @click.prevent="redeen(url)"
          class="_modal:button"
          target="_blank"
          v-if="!!url"
        >
          ir para a compra
        </a>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
