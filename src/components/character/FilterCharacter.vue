<template>
  <ul class="form">
    <form>
      <input
        type="text"
        v-model="filter"
        v-on:input="filterCharacters(filter)"
        placeholder="Search..."
      />
    </form>
  </ul>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "FilterCharacter",
  data() {
    return {
      filter: ""
    };
  },
  methods: mapActions(["filterCharacters"])
};
</script>

