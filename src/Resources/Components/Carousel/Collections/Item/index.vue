<template>
  <router-link
    :to="'/oferta/' + content.id + '/' + slugify(content.title)"
    @click.native="select(content, collection, theme)"
    class="_collections:item"
  >
    <oston-intersepted-image
      :source="content.image_tertiary"
      :alt="content.title"
      class="_collections:figure"
    />

    <oston-intersepted-image
      :source="content.company_logo"
      :alt="content.company_name"
      class="_collections:brand"
    />

    <h3
      class="_collections:description"
      v-if="content.title"
      v-text="content.title"
    />
    <p
      class="_collections:company"
      v-if="content.company_name"
      v-text="content.company_name"
    />

    <footer class="_collections:footer">
      <oston-collections-price
        :content="content.discount"
        :price="strOnlyNumber(content.discount)"
      />
      <div class="_collections:shop">
        <feather name="shopping-cart" />
      </div>
    </footer>

    <oston-image
      v-if="!logged"
      class="_collections:not-logged"
      :container="true"
      source="exclusive-tim-controle.png"
      alt=""
    />
  </router-link>
</template>

<script src="./index.js"></script>
