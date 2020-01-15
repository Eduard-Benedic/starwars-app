<template>
  <div class="grid">
    <div>
      <h3>{{character.character.name}}</h3>
      <ul>
        <li>
          Birth year:
          <strong>{{character.character.birth_year != 'n/a' ? character.character.birth_year : 'Unknown'}}</strong>
        </li>
        <li>Gender: {{character.character.gender != 'n/a' ? character.character.gender : 'Unknown'}}</li>
        <li>
          Eye color:
          <strong>{{character.character.eye_color != 'n/a' ? character.character.eye_color : 'Unknown'}}</strong>
        </li>
        <li>
          Hair Color:
          <strong>{{character.character.hair_color != 'n/a' ? character.character.hair_color : 'Unknown'}}</strong>
        </li>
        <li>
          Height:
          <strong>{{character.character.height != 'n/a' ? character.character.height +' cm' : 'Unknown'}}</strong>
        </li>
        <li>
          Weight:
          <strong>{{character.character.mass != 'n/a' ? character.character.mass +' kg': 'Unknown'}}</strong>
        </li>
      </ul>
    </div>
    <div>
      <h2>Films</h2>
      <ul>
        <li v-for="(film,index) in films" v-bind:key="index">{{film.title}}</li>
      </ul>
    </div>
    <div>
      <h2>Info</h2>
      <ul>
        <li>Created: {{character.character.created}}</li>
        <li>Edited: {{character.character.edited}}</li>
      </ul>
    </div>
    <div class="grid-extend">
      <button @click="deleteCard" class="btn">Delete</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "FavouriteCharacter",
  props: {
    character: Object
  },

  data() {
    return {
      films: []
    };
  },
  methods: {
    ...mapActions(["removeCard"]),
    deleteCard() {
      var { name } = this.character.character;
      this.$store.dispatch("removeCard", name);
    }
  },
  created() {
    const endpoints = this.character.character.films;
    if (endpoints.length > 0) {
      for (var i = 0; i < endpoints.length; i++) {
        axios.get(endpoints[i]).then(res => this.films.push(res.data));
      }
    }
  }
};
</script>

<style lang="less" scoped>
span {
  color: #209a87;
  font-size: 1.1rem;
  font-weight: 500;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;
  grid-gap: 20px 20px;
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 50px;
  border-top: 10px solid #209a87;
}

.grid-extend {
  @media @mq-950 {
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
.btn {
  display: flex;
  align-content: stretch;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgb(206, 2, 2);
}
.item {
  margin-bottom: 20px;
}
@mq-950: ~"only screen and (max-width: 950px)";
// @mq-1200: ~"only screen and (max-width: 1200px)";
// @mq-950: ~"only screen and (max-width: 950px)";
// @mq-768: ~"only screen and (max-width: 768px)";
// @mq-720: ~"only screen and (max-width: 720px)";
// @mq-680: ~"only screen and (max-width: 680px)";
// @mq-600: ~"only screen and (max-width: 600px)";
// @mq-550: ~"only screen and (max-width: 550px)";
// @mq-440: ~"only screen and (max-width: 440px)";
</style>
