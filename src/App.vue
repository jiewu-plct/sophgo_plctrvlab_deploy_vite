<script setup lang="ts">
import { ref } from 'vue'
import router from './router/router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()
const isActiveHome = ref(false);
const isActiveDoc = ref(false);
const isActiveCommunity = ref(false);
const selectedValue = ref('Traditional Chinese')
const languageOptions = [
  {
    value: 'Traditional Chinese',
    label: 'Traditional Chinese'
  },
  {
    value: 'English',
    label: 'English'
  },
  {
    value: 'Russian',
    label: 'Russian'
  },
  {
    value: 'Japanese',
    label: 'Japanese'
  },
  {
    value: 'Korean',
    label: 'Korean'
  }
]

const changeHomeStyle = function() {
  // console.log(isActiveHome.value)
  isActiveHome.value = true
  // console.log(isActiveHome.value)
}

const changeDocStyle = function() {
  // console.log(isActiveDoc.value)
  isActiveDoc.value = true
  // console.log(isActiveDoc.value)
}

const changeCommunityStyle = function() {
  // console.log(isActiveCommunity.value)
  isActiveCommunity.value = true
  // console.log(isActiveCommunity.value)
}

const resetHomeStyle = function() {
  // console.log(isActiveHome.value)
  isActiveHome.value = false
  // console.log(isActiveHome.value)
}

const resetDocStyle = function() {
  // console.log(isActiveDoc.value)
  isActiveDoc.value = false
  // console.log(isActiveDoc.value)
}

const resetCommunityStyle = function() {
  // console.log(isActiveCommunity.value)
  isActiveCommunity.value = false
  // console.log(isActiveCommunity.value)
}

const enterHomePage = function() {
  // console.log('1111111')
  console.log(router.currentRoute.value.path)
  if (router.currentRoute.value.path == '/'){
    router.go(0)
    // location.reload()
  } else {
    router.push("/")
  }
}

const enterDocPage = function() {
  // console.log('2222222')
  console.log(router.currentRoute.value.path)
  if (router.currentRoute.value.path == '/documentation'){
    router.go(0)
    // location.reload()
  } else {
    router.push("/documentation")
  }
}

const enterCommunityPage = function() {
  // console.log('3333333')
  console.log(router.currentRoute.value.path)
  if (router.currentRoute.value.path == '/community'){
    router.go(0)
    // location.reload()
  } else {
    router.push("/community")
  }
} 

const changeLanguage = () => {
  console.log('selectedValue', selectedValue.value)
  switch(selectedValue.value) {
    case "Traditional Chinese": {
      locale.value = "zh_CN"
      localStorage.setItem('lang', locale.value)
      break
    }
    case "English": {
      locale.value = "en_US"
      localStorage.setItem('lang', locale.value)
      break
    }
    case "Russian": {
      locale.value = "ru_RU"
      localStorage.setItem('lang', locale.value)
      break
    }
    case "Japanese": {
      locale.value = "ja_JP"
      localStorage.setItem('lang', locale.value)
      break
    }
    case "Korean": {
      locale.value = "ko_KR"
      localStorage.setItem('locale', locale.value)
      break
    }
  }
}
</script>

<template>
  <div>
    <el-container class="container">
      <el-header>
        <nav class="site-nav animated">
          <div class="language-group">
            <p class="language-label">{{ t('language') }}</p>
            <el-select v-model="selectedValue" placeholder='Select' @change="changeLanguage()">
              <el-option
                v-for="item in languageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"  
              /> 
            </el-select>
          </div>
          <ul class="site-ul">
            <li class="li-left">
              <a href="javascript:void(0)" class="router-link-text" v-on:mouseover="changeHomeStyle" v-on:mouseout="resetHomeStyle" :class="{active:isActiveHome}" @click="enterHomePage()">{{ t('menu.home') }}</a>
            </li>
            <li class="li-center">
              <a href="javascript:void(0)" class="router-link-text" v-on:mouseover="changeDocStyle" v-on:mouseout="resetDocStyle" :class="{active:isActiveDoc}" @click="enterDocPage()">{{ t('menu.documentation') }}</a>
            </li>
            <li class="li-right">
              <a href="javascript:void(0)" class="router-link-text" v-on:mouseover="changeCommunityStyle" v-on:mouseout="resetCommunityStyle" :class="{active:isActiveCommunity}" @click="enterCommunityPage()">{{ t('menu.community') }}</a>
            </li>
          </ul>
        </nav>
      </el-header>
      <el-main>
        <el-header>
          <p class="site-title">{{ t('title.main_title') }}</p>
          <p class="site-description">{{ t('title.sub_title') }}</p>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-main>
      <el-footer>
        <div class="separation-line"></div>
        <p class="center">{{ t('footer') }}</p>
      </el-footer>
    </el-container>
  </div>
</template>

<style type="text/css" scoped>
#app{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.container{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.site-title{
  font-size:xx-large;
  font-weight: bold;
  margin-bottom: 0%;
  margin-top: 0.6%;
}
.site-description{
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  margin-top: 0%;
}
.site-nav{
  text-align:center;
}
.animated{
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-name: drop;
}
@keyframes drop {
  0%{
    transform: translateY(-500px);
  }
  100%{
    transform: translateY(0);
  }
}
.site-ul {
  list-style: none;
  padding-left: 0%;
  margin-top: 0%;
  margin-left: 40%;
}
.site-ul li{
  line-height:3.5em;
  display:inline-block;
  background-color:black;
  /* padding-top:0.6%;
  padding-bottom:0.6%; */
  font-size: 15px;
}
.li-left{
  border-bottom-left-radius: 8px;
  padding-left:2%;
  padding-right:1%;
  /* padding-left: 10px;
  padding-right: 5px; */
}
.li-right{
  border-bottom-right-radius: 8px;
  padding-left:1%;
  padding-right:2%;
  /* padding-left: 7px;
  padding-right: 30px; */
}
.li-center{
  padding-left:1%;
  padding-right:1%;
  /* padding-left: 5px;
  padding-right: 43px; */
}
.router-link-text{
  color: white;
  background: black;
}
.active{
  border: 1px solid white;
  padding: 0.8dvh;
}
.separation-line{
  border-bottom: 1px solid #ccc;
  /* margin-bottom: 20% */
}
.el-footer{
  height: 5em;
  /* text-align: center; */
}
.el-header{
  height: 2.5em;
}
.center{
  margin: 0,auto;
}
.language-group{
  float: right;
  width: 40%;
  /* margin-top: 0%; */
}
.language-label{
  display: inline-block;
  margin-right: 10px;
}
</style>
