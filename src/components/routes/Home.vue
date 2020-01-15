<template>
  <div class="flex1">
    <h1 class="text-center main-h">Welcome to our star wars character finder !</h1>
    <FilterCharacter />
    <Characters />
  </div>
</template>
<script>
import Characters from "../character/Characters.vue";
import FilterCharacter from "../character/FilterCharacter.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Characters,
    FilterCharacter
  },
  methods: {
    ...mapActions(["getAllCharacters, filterCharacters"])
  },
  created() {
    this.$store.dispatch("getAllCharacters");
    // this.getAllCharacters();
  }
};
</script>
<style lang="less">
.flex1 {
  flex: 1;
}
</style>