<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const enterAccess = () => {
  console.log('apply for access')
}
</script>

<template>
  <div>
    <button class="apply-btn" @click="enterAccess()">{{ t('homePage.button') }}</button>
    <p>
      <img src="../assets/Standard_2.png" class="img-center">
    </p>
    <h2 class="content-title">{{ t('homePage.title_1') }}</h2>
    <p class="content-style">
      {{ t('homePage.content_1_1') }}
    </p>
    <p class="content-style">
      {{ t('homePage.content_1_2') }}
    </p>
    <h2 class="content-title">{{ t('homePage.title_2') }}</h2>
    <p class="content-style">
      {{ t('homePage.content_2') }}
    </p>
  </div>
</template>

<style scoped>
.apply-btn{
  background-color: #62c462;
  color: white;
  margin-left: 35%;
  margin-top: 6em;
  margin-bottom: 1.5em;
  font-weight: bold;
}
.img-center{
  width: 45%;
  height: 45%;
}
.content-title {
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  text-align: left;
  margin-left: 27.5%;
}
.content-style{
  word-break: normal;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 45%;
  text-align: left;
  margin: auto;
}
</style>
