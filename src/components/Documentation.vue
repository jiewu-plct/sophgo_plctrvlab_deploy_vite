<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="entries-grid">
      <article>
        <h3 class="entry-title">
          <img src="../assets/key.png" class="title-img">
          {{ t('documentationPage.title_1') }}
        </h3>
        <p class="entry-content">
          {{ t('documentationPage.content_1') }}
        </p>
        <u class="more-text">
          <router-link to="/documentation/access" class="more-text">{{ t('documentationPage.more') }}</router-link>
        </u>
      </article>
      <article>
        <h3 class="entry-title">
          <img src="../assets/sign-post.png" class="title-img">
          {{ t('documentationPage.title_2') }}
        </h3>
        <p class="entry-content">
          {{ t('documentationPage.content_2') }}
        </p>
        <u>
          <router-link to="/documentation/getting_started" class="more-text">{{ t('documentationPage.more') }}</router-link>
        </u>
      </article>
      <article>
        <h3 class="entry-title">
          <img src="../assets/processor.png" class="title-img">
          {{ t('documentationPage.title_3') }}
        </h3>
        <p class="entry-content">
          {{ t('documentationPage.content_3') }}
        </p>
        <u>
          <router-link to="/documentation/hardware" class="more-text">{{ t('documentationPage.more') }}</router-link>
        </u>
      </article>
      <article>
        <h3 class="entry-title">
          <img src="../assets/cpu.png" class="title-img">
          {{ t('documentationPage.title_4') }}
        </h3>
        <p class="entry-content">
          {{ t('documentationPage.content_4') }}
        </p>
        <u>
          <router-link to="/documentation/running_riscv" class="more-text">{{ t('documentationPage.more') }}</router-link>
        </u>
      </article>
  </div>
</template>

<style scoped>
.entries-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3.5em;
  width: 1024px;
  /* margin: auto; */
  margin: 3% auto auto auto
}
.entry-title {
  /* display: inline-block; */
  /* line-height: 100%; */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: italic;
  font-size: x-large;
}
.title-img {
  vertical-align: middle;
  display: inline-block;
  height: 50px;
}
.entry-content {
  text-align: left;
  word-wrap: break-word;
  /* margin-left:50px;
  margin-right: 10px; */
}
.more-text {
  color: black;
  float: left;
  /* margin-left: 2dvw; */
}

</style>