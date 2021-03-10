<template functional>
  <!-- // r$x,x off -->
  <p
    v-if="/r\$[0-9]{1,4},[0-9]{1,2}\soff/i.exec(props.content)"
    class="offer:content-discount"
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
    class="offer:content-discount"
  >
    Por R$<strong>{decimal}</strong>,{cents}
  </p>

  <!-- // até x% off -->
  <p
    v-else-if="/(?:...)\s[0-9]{1,2}%\s(off)/i.exec(props.content)"
    class="offer:content-discount"
  >
    Até <strong>{{ props.price }}</strong
    >% OFF
  </p>

  <!-- // x% off -->
  <p
    v-else-if="/[0-9]{1,2}%\s(off)/i.exec(props.content)"
    class="offer:content-discount"
  >
    <strong>{{ props.price }}</strong
    >% OFF
  </p>

  <!-- // grátis -->
  <p
    v-else-if="/(grátis|gratis)/i.exec(props.content)"
    class="offer:content-discount"
  >
    GRÁTIS
  </p>

  <!-- // compre&ganhe -->
  <p
    v-else-if="/^.*?\bcompre\b.*?\bganhe\b.*?$/gim.exec(props.content)"
    class="offer:content-discount"
  >
    Compre<strong>&Ganhe</strong>
  </p>

  <!-- // default -->
  <p v-else class="offer:content-discount-default">
    <!-- {{ props.price.substring(0, props.price.length - 2) }} -->
    {{ props.content }}
  </p>
</template>
