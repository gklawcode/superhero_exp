<template>
  <div class="container" align="center">
    <img src="https://media2.giphy.com/media/aEBPPgXhjaUHS/source.gif">
    <h1>Marvel Superhero Explorer</h1>
    <p>(click on a superhero to see comic apperances)</p>
    <table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Superhero</th>
            <th>Number of Comics</th>
        </tr>
    </thead>
    <tbody>
        <superhero-item v-for="superhero in superheros" :key="superhero.id" :superhero="superhero">
        </superhero-item>
    </tbody>
  </table>
  </div>
</template>

<script>
import { SUPERHEROS_DB_QUERY } from '../constants/graphql'
import SuperheroItem from './SuperheroItem'

export default {
  data () {
    return {
      superheros: {
        superheros: []
      }
    }
  },
    components: {
        SuperheroItem
    },
    apollo: {
      superheros: {
        query: SUPERHEROS_DB_QUERY
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-family: 'Press Start 2P';
}
</style>
