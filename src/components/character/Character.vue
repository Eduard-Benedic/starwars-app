<template>
  <div class="character">
    <ul>
      <li>
        <h3>{{character.name}}</h3>
      </li>
      <li>
        Birth year:
        <strong>{{character.birth_year != 'n/a' ? character.birth_year : 'Unknown'}}</strong>
      </li>
      <li>Gender: {{character.gender != 'n/a' ? character.gender : 'Unknown'}}</li>
      <li>
        Eye color:
        <strong>{{character.eye_color != 'n/a' ? character.eye_color : 'Unknown'}}</strong>
      </li>
      <li>
        Hair Color:
        <strong>{{character.hair_color != 'n/a' ? character.hair_color : 'Unknown'}}</strong>
      </li>
      <li>
        Height:
        <strong>{{character.height != 'n/a' ? character.height +' cm' : 'Unknown'}}</strong>
      </li>
      <li>
        Weight:
        <strong>{{character.mass != 'n/a' ? character.mass +' kg': 'Unknown'}}</strong>
      </li>
      <li>
        <button class="btn" @click="addCard">Add to my list</button>
      </li>
    </ul>
  </div>
</template>

<script>
// import uuid from "uuid";
export default {
  props: {
    character: Object
  },
  data() {
    return {
      added: false
    };
  },
  methods: {
    addCard() {
      if (!this.added) {
        const favouriteCard = {
          character: this.character
        };
        this.$store.dispatch("addFavouriteCard", favouriteCard);
        this.added = true;
      } else {
        return;
      }
    }
  }
};
</script>
<style scoped lang="less">
h3 {
  margin-bottom: 15px;
  &:after {
    display: block;
    margin-top: 5px;
    content: " ";
    max-width: 100px;
    background-color: #209a87;
    height: 2px;
  }
}
li strong {
  color: #209a87;
  font-size: 1.1rem;
  font-weight: 500;
}

ul {
  background-color: #fafafa;
  padding: 30px 35px;
  box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.1);
}

li {
  font-family: "Lora", serif;
  margin-bottom: 15px;
}

.btn {
  background-color: #209a87;
  padding: 10px 20px;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: #3fc4b0;
  }
}
</style>
