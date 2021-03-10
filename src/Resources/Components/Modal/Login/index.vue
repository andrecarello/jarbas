<template>
  <div :class="['_modal:login', $parent.loginIsOpen ? '_modal:login-active' : '']">
    <div class="_modal:login-backdrop" />
    <div class="_modal:login-content">
      <a href="" class="_modal:login-close" @click.prevent="$parent.loginIsOpen = false">
        <feather name="x" />
      </a>

      <div class="_modal:login-inner">
        <oston-image
          :container="true"
          class="_modal:login-brand"
          source="tim-logo-invert.svg"
          alt="TIM"
        />

        <FormulateForm
          @submit="submit('msisdn')"
          class="_modal:login-form _modal:login-step-1"
        >
          <FormulateInput
            :class="[
              '_modal:login-group',
              validating.msisdn ? '_modal:login-group-validating' : '',
            ]"
            type="tel"
            label="Telefone"
            name="msisdn"
            v-model="form.msisdn"
            placeholder="(DDD) + Número TIM"
            @input="validate('msisdn', form.msisdn)"
            :error="errors.msisdn ? 'O número informado é inválido' : null"
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
            v-if="step === 1"
            type="submit"
            :class="[
              '_btn _btn:dark-green',
              loading.msisdn ? '_btn:loading' : '',
              !isValid.msisdn ? '_btn:disabled' : '',
            ]"
          >
            <span v-if="loading.msisdn"></span>
            <span v-else>Enviar</span>
          </button>
        </FormulateForm>

        <FormulateForm
          @submit="submit('pin')"
          class="_modal:login-form _modal:login-step-2"
          v-if="step === 2"
        >
          <FormulateInput
            class="_modal:login-group"
            type="tel"
            label="Código"
            name="pin"
            v-model="form.pin"
            placeholder="* * * *"
            @input="validate('pin', form.pin)"
            :error="errors.pin ? 'O número informado é inválido' : null"
            validation="bail|required|pin|min:4,length|max:4,length"
            :validation-rules="{
              pin: ({ value }) => (form.pin = mask.pin(value)),
            }"
            :validation-messages="{
              required: 'Campo obrigatório',
              pin: 'asd',
              min: 'Preencha o campo corretamente',
              max: 'Preencha o campo corretamente',
            }"
          />

          <button
            type="submit"
            :class="[
              '_btn _btn:dark-green',
              loading.pin ? '_btn:loading' : '',
              isValid.pin ? '_btn:disabled' : '',
            ]"
          >
            <span v-if="loading.pin"></span>
            <span v-else>Enviar</span>
          </button>
        </FormulateForm>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
