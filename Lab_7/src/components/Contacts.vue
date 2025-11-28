<script setup>
import { ref, computed } from 'vue'

const formData = ref({
  name: '',
  surname: '',
  age: '',
  sex: '',
  email: '',
  commentary: '',
  phone: '',
})

const sexOptions = {
  M: 'Male',
  F: 'Female',
}

const validateFields = computed(() => {
  const e = []

  if (!formData.value.name) e.push({ field: 'name', message: 'Введите имя!' })

  if (!formData.value.surname) e.push({ field: 'surname', message: 'Введите фамилию!' })

  if (!(formData.value.age <= 0)) e.push({ field: 'age', message: 'Укажите корректный возраст!' })

  if (!formData.value.email) e.push({ field: 'email', message: 'Укажите email!' })

  if (!formData.value.phone) e.push({ field: 'phone', message: 'Укажите телефон!' })

  return e
})

function hasError(fieldName) {
  return validateFields.value.some((error) => error.field === fieldName)
}

function getError(fieldName) {
  const error = validateFields.value.find((error) => error.field === fieldName)
  return error ? error.message : ''
}

function validateForm() {
  if (validateFields.value.length > 0) alert('Ошибки в форме')
}

function resetForm() {
  formData.value = {
    name: '',
    surname: '',
    age: '',
    sex: '',
    email: '',
    commentary: '',
    phone: '',
  }
}
</script>

<template>
  <fieldset>
    <legend><h1>Введите Контактные данные:</h1></legend>

    <form>
      <div style="margin: 2em">
        <div style="display: flex; gap: 2em; flex-wrap: wrap">
          <div>
            <label><h2>Введите имя:</h2></label>
            <input type="text" v-model="formData.name" :class="{ error: hasError('name') }" />
            <label style="color: red" v-show="hasError('name')">Введите имя</label>
          </div>

          <div>
            <label><h2>Введите фамилию:</h2></label>
            <input type="text" v-model="formData.surname" :class="{ error: hasError('surname') }" />
            <label style="color: red" v-show="hasError('surname')">Введите фамилию</label>
          </div>

          <div>
            <label><h2>Выберите пол:</h2></label>
            <div style="display: flex; gap: 2em; flex-wrap: wrap; margin: 2.3em 0px">
              <h2 v-for="(label, key) in sexOptions" :key="key" style="display: flex; gap: 0.5em">
                <input type="radio" v-model="formData.sex" :value="key" />
                <span>{{ label }}</span>
              </h2>
            </div>
          </div>

          <div>
            <label><h2>Выберите Возраст:</h2></label>
            <input
              type="number"
              v-model.number="formData.age"
              :class="{ error: hasError('age') }"
            />
            <label style="color: red" v-show="hasError('age')">Введите корректный возраст</label>
          </div>

          <div>
            <label><h2>Ваш email:</h2></label>
            <input
              type="text"
              v-model="formData.email"
              :class="{ error: hasError('email') }"
              placeholder="foo@gmail.com"
            />
            <label style="color: red" v-show="hasError('email')">Ошибка в почте</label>
          </div>

          <div>
            <label><h2>Ваш комментарий:</h2></label>
            <input type="text" v-model="formData.commentary" placeholder="Ваш комментарий" />
          </div>

          <div class="form-group">
            <label><h2>Ваш телефон:</h2></label>
            <input type="text" v-model="formData.phone" placeholder="+7/+3..." />
            <label style="color: red">Ошибка в номере телефона</label>
          </div>
        </div>

        <div style="display: flex; gap: 1em; margin: 2em 0px">
          <button type="button" @click="validateForm">Отправить</button>
          <button type="button" @click="resetForm">Сбросить</button>
        </div>
      </div>
    </form>
  </fieldset>
</template>

<style scoped>
/* @import url('../styles/buttons.css');
@import url('../styles/inputs.css'); */
</style>
