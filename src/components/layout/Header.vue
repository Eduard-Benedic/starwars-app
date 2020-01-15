<template>
  <div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/" class="nav__link">Home</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/my-list" class="nav__link">My favourite list</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.nav__link.router-link-exact-active {
  border-bottom: 2px solid rgba(189, 189, 189, 0.3);
  color: #209a87;
  font-weight: bold;
}
.nav {
  margin: 50px 0;
  &__item {
    margin-right: 20px;
  }
  &__link {
    font-size: 1.2rem;
    color: #21344a;
    text-decoration: none;
  }
  &__list {
    display: flex;
    justify-content: flex-start;
  }
}
</style>