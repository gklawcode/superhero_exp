<template>
  <tr>
    <td v-on:click="onHeroSelect">{{superhero.name}}</td>
    <td v-on:click="onHeroSelect">{{superhero.comics.available}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'SuperheroItem',
    props: ['superhero'],
    methods: {
      onHeroSelect: function() {
        if ( this.superhero.comics.available > 0 ) {
        this.$router.push(`/${this.superhero.id}`);
        }
      }
    }
  }
</script>