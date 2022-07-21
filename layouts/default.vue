<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link.to" :to="link.to" router exact>
          {{ link.name }}
        </v-tab>
      </v-tabs>

      <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32"></v-avatar>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-sheet class="pa-6" rounded="lg">
              <PostForm />
            </v-sheet>
            <v-sheet class="pa-6 mt-5" rounded="lg">
              <PostUpdate />
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PostForm from '~/components/PostForm.vue';
import PostUpdate from '~/components/PostUpdate.vue';
export default {
  data: () => ({
    links: [
      { name: "Dashboard", to: "/" },
      { name: "Home", to: "home" },
      { name: "About", to: "about" },
    ]
  }),
  components: { PostForm, PostUpdate }
}
</script>