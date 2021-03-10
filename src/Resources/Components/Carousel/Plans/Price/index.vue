<template>
  <div>
    <p class="_plans:price" :data-ic-price="unity + '.' + tenths">
      <span class="_plans:price-currency">R$</span>
      <span class="_plans:price-unity">{{ unity }}</span>
      <span class="_plans:price-tenths">,{{ tenths }}</span>
      <span class="_plans:price-month">/MÊS</span>
    </p>
    <p class="_plans:price-text">no cartão de crédito</p>
  </div>
</template>

<script src="./index.js"></script>
