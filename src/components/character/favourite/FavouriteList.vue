<template>
  <div>
    <div>
      <FavouriteCharacter
        v-for="(character,index) in allFavCharacters"
        v-bind:character="character"
        v-bind:key="index"
      ></FavouriteCharacter>
    </div>
  </div>
</template>
<script>
import FavouriteCharacter from "./FavouriteCharacter.vue";
import { mapGetters } from "vuex";
export default {
  name: "FavouriteList",
  components: {
    FavouriteCharacter
  },
  computed: mapGetters(["allFavCharacters"])
};
</script>

<style scoped lang="less">
h2 {
  font-size: 1.2rem;
  padding: 0 0px;

  &:after {
    display: block;
    margin-top: 10px;
    content: " ";
    background-color: #209a87;
    height: 2px;
    max-width: 100px;
  }
}
p {
  padding: 0 0px;
}
</style>