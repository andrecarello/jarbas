<template functional>
  <div class="_plans:benefits">
    <div class="_plans:benefits-content">
      <p v-if="props.note" v-html="props.note" />
      <ul v-else>
        <li>
          * Abra sua conta no C6 Bank e garanta<br />4GB de bônus por 2 meses.
        </li>
        <li>
          Além disso, pagando sua fatura com o cartão de crédito C6 Bank,<br />você
          garante mais 4GB de bônus por 12 meses.
        </li>
      </ul>
    </div>

    <div class="_plans:benefits-content">
      <p>Ligações e SMS</p>
      <ul>
        <li>Ligações inclusas para qualquer<br />operadora do Brasil</li>
        <li>SMS inclusos para TIM + 100<br />para outras operadoras</li>
      </ul>
    </div>
    <div class="_plans:benefits-content">
      <p>Outros benefícios</p>
      <ul>
        <li
          v-for="(bundle, index) in props.bundles.split(',')"
          :key="index"
          v-text="bundle"
        />
      </ul>
    </div>
    <div class="_plans:benefits-content">
      <p>Regulamento</p>
      <a
        :href="
          '/files/regulamentos/regulamento-oferta-bonus-' +
          props.data +
          'gb-' +
          props.name +
          '-01.11.20.pdf'
        "
        download
        >Baixar o regulamento do plano
      </a>
    </div>
  </div>
</template>

<script src="./index.js"></script>
