<template>
  <tr>
    <td>{{comic.name}}</td>
  </tr>
</template>

<script>
import VueRouter from "vue-router";
export default {
  name: "ComicItem",
  props: ["comic"]
};
</script>