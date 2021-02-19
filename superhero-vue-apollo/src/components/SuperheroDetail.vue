<template>
  <div class="container" align="center">
    <div>
        <h1>{{superhero.name}}</h1>
    </div>
    <router-link to="/">Back</router-link>
    <table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Comic</th>
        </tr>
    </thead>
    <tbody>
        <comic-item v-for="comic in superhero.comics.items" :key="comic.name" :comic="comic"></comic-item>
    </tbody>
  </table>
  </div>
</template>

<script>
import { SUPERHERO_QUERY } from "../constants/graphql";
import ComicItem from "./ComicItem";

export default {
  name: "SuperheroDetail",
  data() {
    return {
      superhero: {
        name: "",
        comics: {
          items: []
        }
      },
      routeParam: this.$route.params.id
    };
  },
  components: {
    ComicItem
  },
  apollo: {
    superhero: {
      query: SUPERHERO_QUERY,
      variables() {
        return {
          id: this.routeParam
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Press Start 2P';
}
.container {
  margin-top: 25px;
}
</style>
