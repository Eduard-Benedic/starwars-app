<template>
  <div class="container">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Footer from "./components/layout/Footer.vue";
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
};
</script>
<style lang="less">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.4;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.footer {
  background-color: #21344a;
}
.container {
  max-width: 1400px;
  padding: 0 25px;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transorm: translateY(-70px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-70px);
    opacity: 0;
  }
}

// ========= VARIABLES ======================

@dark-blue: #21344a;
@dark-green: #209a87;
@white: #ffffff;
// MEDIA QUERIES
@mq-1200-up: ~"only screen and (min-width: 1200px)";
@mq-1400: ~"only screen and (max-width: 1400px)";
@mq-1200: ~"only screen and (max-width: 1200px)";
@mq-950: ~"only screen and (max-width: 950px)";
@mq-768: ~"only screen and (max-width: 768px)";
@mq-720: ~"only screen and (max-width: 720px)";
@mq-680: ~"only screen and (max-width: 680px)";
@mq-600: ~"only screen and (max-width: 600px)";
@mq-550: ~"only screen and (max-width: 550px)";
@mq-440: ~"only screen and (max-width: 440px)";
@mq-400: ~"only screen and (max-width: 440px)";
@mq-380: ~"only screen and (max-width: 380px)";

html {
  font-family: "Roboto", sans-serif;
}
body {
  width: 100%;
}
h1,
h2,
h3,
h4 {
  font-family: "Poppins", sans-serif;
  margin: 0;
  color: @dark-blue;
}
h1 {
  font-size: 1.7rem;
  margin-bottom: 25px;
}
h2 {
  font-size: 1.3rem;
  margin-bottom: 15px;
}
h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

p {
  margin-bottom: 12px;
}

.grid-33 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media @mq-950 {
    grid-template-columns: 1fr 1fr;
  }
  @media @mq-680 {
    grid-template-columns: 1fr;
  }
}

.btn {
  display: inline-block;
  color: @white;
  width: 100%;
  border: none;
  padding: 20px 0;
  background-color: @dark-green;
  cursor: pointer;
  &:hover {
    background-color: #1db8a0;
  }
}
.grid-25 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media @mq-768 {
    grid-template-columns: 1fr;
  }
}

[class*="--gap50"] {
  grid-gap: 50px;

  @media @mq-768 {
    grid-gap: 20px;
  }
}
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
}
.site-container {
  position: relative;
  min-width: 360px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.underline {
  &:after {
    display: block;
    content: "";
    max-width: 80px;
    height: 2px;
    background-color: @dark-green;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.text-center {
  text-align: center;
}
input {
  width: 400px;
  margin: 30px auto;
  background-color: @dark-blue;
  display: block;
  padding: 20px 20px;
  border: none;
  outline: none;
  color: @white;
  &::placeholder {
    color: rgb(214, 214, 214);
    font-style: italic;
  }
}
</style>
