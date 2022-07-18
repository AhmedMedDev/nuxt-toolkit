<template>
  <div>
    <v-simple-table class="pa-6">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              title
            </th>
            <th class="text-left">
              completed
            </th>
            <th class="text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in todos" :key="item.id">
            <td>
              <nuxt-link :to="`todo/${item.id}`">{{ item.title }}</nuxt-link>
            </td>
            <td>
              <span v-if="item.completed" class="rounded-lg success white--text pa-1">completed</span>
              <span v-else class="rounded-lg error white--text pa-1">uncompleted</span>
            </td>
            <td>
              <v-btn @click="remove(item.id)" color="error ml-3" elevation="2">Delete</v-btn>
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
import axios from 'axios'
export default {
  middleware: 'auth',
  created() {

    axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {
        _page: 1,
        _limit: 5,
      }
    })
      .then(response => this.todos = response.data)
      .catch(err => console.log(err))
  },
  methods: {
    remove(id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => this.notify('Task Completed Successfully', 'green'))
        .catch(err => this.notify(`Oops : ${err}`, 'error'))
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
      todos: [],
      snackbar: false,
      text: '',
      type: '',
      timeout: 2000,
    }
  },
}
</script>
