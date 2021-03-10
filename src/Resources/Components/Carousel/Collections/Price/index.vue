<template functional>
  <!-- // r$x,x off -->
  <p
    v-if="/r\$[0-9]{1,4},[0-9]{1,2}\soff/i.exec(props.content)"
    class="_collections:price"
  >
    R$<strong>{{ props.price.substring(0, props.price.length - 2) }}</strong
    >,{{
      props.price.substring(props.price.length - 2, props.price.length)
    }}
    OFF
  </p>

  <!-- // por r$x,x -->
  <p
    v-else-if="/por\sr\$[0-9]{1,4},[0-9]{2}/i.exec(props.content)"
    class="_collections:price"
  >
    Por R$<strong>{decimal}</strong>,{cents}
  </p>

  <!-- // até x% off -->
  <p
    v-else-if="/(?:...)\s[0-9]{1,2}%\s(off)/i.exec(props.content)"
    class="_collections:price"
  >
    Até <strong>{{ props.price }}</strong
    >%<br />OFF
  </p>

  <!-- // x% off -->
  <p
    v-else-if="/[0-9]{1,2}%\s(off)/i.exec(props.content)"
    class="_collections:price"
  >
    <strong>{{ props.price }}</strong
    >%<br />OFF
  </p>

  <!-- // grátis -->
  <p
    v-else-if="/(grátis|gratis)/i.exec(props.content)"
    class="_collections:price"
  >
    GRÁTIS
  </p>

  <!-- // compre&ganhe -->
  <p
    v-else-if="/^.*?\bcompre\b.*?\bganhe\b.*?$/gim.exec(props.content)"
    class="_collections:price"
  >
    Compre<strong>&Ganhe</strong>
  </p>

  <!-- // default -->
  <p v-else class="_collections:price-default">
    {{ props.content }}
  </p>
</template>
