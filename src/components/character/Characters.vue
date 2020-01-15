<template>
  <div class="grid-33 grid-33--gap50">
    <Character
      v-for="(character, index) in filteredCharacters"
      :key="index"
      v-bind:character="character"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Character from "./Character.vue";
export default {
  components: {
    Character
  },
  computed: mapGetters(["filteredCharacters"])
};
</script>

