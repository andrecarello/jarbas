<template functional>
  <section class="offer:step">
    <div class="offer:step-content">
      <oston-image
        source="icons/tap.svg"
        alt="Clique"
        style="transform: rotate(45deg)"
      />
      <slot v-if="props.hasCode">
        <p>
          Clique abaixo no botão<br /><span>“VER CUPOM”</span><br />para resgatar
        </p>
      </slot>
      <slot v-else>
        <p>
          Clique abaixo no botão<br /><span>“AVANÇAR”</span><br />para acessar o
          site.
        </p>
      </slot>
    </div>
    <div class="offer:step-spacer">
      <oston-image source="icons/dots.svg" alt="|" />
    </div>
    <div class="offer:step-content">
      <oston-image source="icons/shopping-cart.svg" alt="Clique" />
      <slot v-if="!props.hasCode && props.hasLink">
        <p>Seu<span>“DESCONTO”</span><br />é aplicado <br />automaticamente</p>
      </slot>
      <slot v-else>
        <p>
          Insira o seu<br /><span>“CÓDIGO DE DESCONTO”</span><br />no carrinho
          de compras.
        </p>
      </slot>
    </div>
  </section>
</template>
