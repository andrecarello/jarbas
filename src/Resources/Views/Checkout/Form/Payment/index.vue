<template>
  <oston-layout title="Fatura e Pagamento" step="3">
    <FormulateForm @submit="submit" class="form:step-3">
      <oston-checkout-payment-plan />
      <p class="checkout:subtitle">
        Preencha seus dados para<br />confirmar a contratação:
      </p>

      <input type="text" class="_o8atP" v-model="form.captcha" />

      <!-- CPF -->
      <FormulateInput
        class="form:group"
        :class="validating.cpf ? 'form:group-has-validating' : ''"
        element-class="form:control"
        type="tel"
        label="Número do seu CPF"
        name="cpf"
        v-model="form.cpf"
        placeholder="_ _ _ . _ _ _ . _ _ _ - _ _"
        @input="validate('cpf', form.cpf)"
        :error="errors.cpf ? 'O código informado é inválido' : null"
        validation="bail|required|cpf|min:14,length|max:14,length"
        :validation-rules="{
          cpf: ({ value }) => (form.cpf = mask.cpf(value)),
        }"
        :validation-messages="{
          required: 'Cpf inválido',
          cpf: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
      />

      <!-- CEP -->
      <FormulateInput
        class="form:group"
        :class="validating.cep ? 'form:group-has-validating' : ''"
        element-class="form:control"
        type="tel"
        label="CEP"
        name="cep"
        v-model="form.cep"
        placeholder="_ _ _ _ _-_ _ _"
        @input="validate('cep', form.cep)"
        :error="errors.cep ? 'O cep informado é inválido' : null"
        validation="bail|required|cep|min:9,length|max:9,length"
        :validation-rules="{
          cep: ({ value }) => (form.cep = mask.cep(value)),
        }"
        :validation-messages="{
          required: 'Cep inválido',
          cep: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
      />

      <!-- BIRTHDAY -->
      <div class="checkout:birthday">
        <label class="checkout:birthday-label">Data de Nasc.</label>
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="select"
          name="bday"
          v-model="form.birthday.day"
          placeholder="DIA"
          :options="days(1, 31)"
          validation="bail|required"
          :validation-messages="{
            required: 'Dia inválido',
          }"
        />
        <span class="checkout:birthday-slash">/</span>
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="select"
          name="bmonth"
          v-model="form.birthday.month"
          placeholder="MÊS"
          :options="months()"
          validation="bail|required"
          :validation-messages="{
            required: 'Mês inválido',
          }"
        />
        <span class="checkout:birthday-slash">/</span>
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="select"
          name="byear"
          v-model="form.birthday.year"
          placeholder="ANO"
          :options="years(1900, date().year - 10)"
          validation="bail|required"
          :validation-messages="{
            required: 'Ano inválido',
          }"
        />
      </div>

      <!-- CREDIT CARD -->
      <!-- NUMBER -->
      <FormulateInput
        class="form:group"
        :class="validating.card ? 'form:group-has-validating' : ''"
        element-class="form:control"
        type="tel"
        label="Número do cartão"
        name="number"
        v-model="form.card.number"
        placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _"
        @input="validate('card', form.card.number)"
        :error="errors.card ? 'O cartão informado é inválido' : null"
        validation="bail|required|card|min:19,length|max:19,length"
        :validation-rules="{
          card: ({ value }) => (form.card.number = mask.card(value)),
        }"
        :validation-messages="{
          required: 'Número de cartão inválido',
          card: 'Preencha o campo corretamente',
          min: 'Preencha o campo corretamente',
          max: 'Preencha o campo corretamente',
        }"
      />

      <!-- EXPIRATION DATE -->
      <div class="checkout:row">
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="select"
          label="Mês de expiração"
          name="expirationmonth"
          v-model="form.card.month"
          placeholder="MÊS"
          :options="months()"
          validation="bail|required"
          :validation-messages="{
            required: 'Mês de expiração inválido',
          }"
        />
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="select"
          label="Ano de expiração"
          name="expirationyear"
          v-model="form.card.year"
          placeholder="ANO"
          :options="years(date().year, date().year + 18)"
          validation="bail|required"
          :validation-messages="{
            required: 'Ano de expiração inválido',
          }"
        />
      </div>

      <!-- CVV -->
      <div class="checkout:row">
        <FormulateInput
          class="form:group"
          element-class="form:control"
          type="tel"
          label="Cód. segurança"
          name="cvv"
          v-model="form.card.cvv"
          placeholder="_ _ _"
          :error="errors.card.cvv ? 'O código informado é inválido' : null"
          validation="bail|required|cvv|min:3,length|max:4,length"
          :validation-rules="{
            cvv: ({ value }) => (form.card.cvv = mask.cvv(value)),
          }"
          :validation-messages="{
            required: 'Código inválido',
            cvv: 'Preencha o campo corretamente',
            min: 'Preencha o campo corretamente',
            max: 'Preencha o campo corretamente',
          }"
        />
        <oston-image
          :container="true"
          source="icons/security-code.svg"
          alt=""
        />
      </div>

      <button
        type="submit"
        :class="['_btn _btn:dark-green', loading ? '_btn:loading' : '']"
      >
        <span v-if="loading" />
        <span v-else>Concluir</span>
      </button>

      <div class="checkout:terms">
        <label for="checkbox-conditions" class="checkout:checkbox">
          <input
            type="checkbox"
            id="checkbox-conditions"
            :checked="form.accept"
          />
          <span />
        </label>
        <p>
          <label for="checkbox-conditions">
            Afirmo que li e concordo<br />com os
          </label>
          <router-link to="/termos">termos e condições</router-link><br />
          <label for="checkbox-conditions" class="small">
            O plano é sem fidelização, assim, você pode cancelar quando quiser,
            sem multas ou qualquer adicional.
          </label>
        </p>
      </div>
    </FormulateForm>
  </oston-layout>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
