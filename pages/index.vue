<template>
  <div>
    <v-simple-table class="pa-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              Body
            </th>
            <th class="text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.state.posts" :key="item.id" class="mt-2">
            <td>
              <nuxt-link :to="`posts/${item.id}`">{{ item.title.substring(0, 7) }}</nuxt-link>
            </td>
            <td>
              <p class="mb-0">{{ item.body.substring(0, 20) }}</p>
            </td>
            <td class="d-flex align-center">
              <v-btn @click="remove(item.id)" color="error mr-3" elevation="2">Delete</v-btn>
              <v-btn @click="edit(item.id)" color="info" elevation="2">Edit</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-snackbar v-model="snackbar" :color="type">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  // middleware: 'auth',
  created() {
    this.$store.dispatch('fetchPosts');
  },
  methods: {
    remove(id) {
      this.$store.dispatch('deletePost', id)
        .then(res => this.notify('Task Completed Successfully', 'green'))
    },
    edit(id) {
      // XXXX
      this.$store.commit('set_selectedPost', {
        title: 'title 1',
        body: 'title 2',
      })
    },
    notify(message, type) {
      this.snackbar = true;
      this.text = message;
      this.type = type;
    }
  },
  data() {
    return {
      completed: false,
      snackbar: false,
      text: '',
      type: '',
      timeout: 2000,
    }
  },
}
</script>
