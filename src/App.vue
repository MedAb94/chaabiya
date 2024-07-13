<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <h3>CHAABIYA</h3>
      </div>

      <v-spacer></v-spacer>
      <v-btn
          href="/"
          text
      >
        <v-icon>mdi-account-group</v-icon>
      </v-btn>
      <v-btn
          href="/offices"
          text
      >
        <v-icon>mdi-office-building-marker</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <!--      <v-btn-->
      <!--          href="#"-->
      <!--          target="_blank"-->
      <!--          text-->
      <!--      >-->
      <!--        &lt;!&ndash;        user icon&ndash;&gt;-->
      <!--        <v-icon>mdi-account</v-icon>-->
      <!--      </v-btn>-->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import VotantCompo from './components/VotantCompo.vue';

export default {
  name: 'App',

  // components: {
  //   VotantCompo,
  // },

  data: () => ({
    //
  }),
};
</script>
