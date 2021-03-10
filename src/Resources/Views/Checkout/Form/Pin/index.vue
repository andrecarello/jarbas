<template>
  <oston-layout
    title="Insira o código de 4<br />dígitos que enviamos<br />por SMS."
    step="2"
  >
    <FormulateForm @submit="submit" class="form:step-2">
      <input type="text" class="_o8atP" v-model="form.captcha" />

      <FormulateInput
        class="form:group"
        element-class="form:control"
        type="tel"
        name="pin"
        v-model="form.pin"
        placeholder="_ _ _ _"
        :error="errors.pin ? 'O código informado é inválido' : null"
        validation="bail|required|pin|min:4,length|max:4,length"
        :validation-rules="{
          pin: ({ value }) => (form.pin = mask.pin(value)),
        }"
        :validation-messages="{
          required: 'Campo obrigatório',
          pin: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
      />

      <button
        type="submit"
        :class="[
          '_btn _btn:dark-green',
          loading ? '_btn:loading' : '',
          $parent.count(form.pin, 4) || errors.pin ? '_btn:disabled' : '',
        ]"
      >
        <span v-if="loading" />
        <span v-else>Concluir</span>
      </button>

      <p v-if="sending.pin" class="checkout:text-loading">
        <span />
        Aguarde...
      </p>
      <a v-else href="" @click.prevent="resendPin" class="form:link"
        >Não recebeu? Enviar novo código</a
      >
    </FormulateForm>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
