<template>
  <oston-layout title="Olá! Insira seu<br />DDD + Número TIM" step="1">
    <FormulateForm @submit="submit" class="form:step-1">
      <input type="text" class="_o8atP" v-model="form.captcha" />

      <FormulateInput
        class="form:group"
        :class="validating.msisdn ? 'form:group-has-validating' : ''"
        element-class="form:control"
        type="tel"
        label="Telefone"
        name="msisdn"
        v-model="form.msisdn"
        placeholder="(DDD) + Número TIM"
        @input="validate('msisdn', form.msisdn)"
        :error="this.errors.msisdn ? 'O número informado é inválido' : null"
        validation="bail|required|msisdn|min:15,length|max:15,length"
        :validation-rules="{
          msisdn: ({ value }) => (form.msisdn = mask.msisdn(value)),
        }"
        :validation-messages="{
          required: 'Campo obrigatório',
          msisdn: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
      />

      <button
        type="submit"
        :class="[
          '_btn _btn:dark-green',
          loading ? '_btn:loading' : '',
          $parent.count(form.msisdn, 11) || errors.msisdn || validating.msisdn
            ? '_btn:disabled'
            : '',
        ]"
      >
        <span v-if="loading" />
        <span v-else>Concluir</span>
      </button>
    </FormulateForm>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
