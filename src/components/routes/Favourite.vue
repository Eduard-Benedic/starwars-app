<template>
  <div class="flex1">
    <h2>Welcome to your favourite character page</h2>
    <p>The right place where you can see all your favourite characters</p>
    <FavouriteList />
  </div>
</template>

<script>
import FavouriteList from "../character/favourite/FavouriteList";
export default {
  components: {
    FavouriteList
  }
};
</script>

<style scoped>
.flex1 {
  flex: 1;
}
</style>