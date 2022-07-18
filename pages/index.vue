<template>
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
          <td>{{ item.title }}</td>
          <td>{{ item.completed }}</td>
          <td>
            <v-btn color="error ml-3" elevation="2">Delete</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import axios from 'axios'
export default {
  async created() {

    let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5');

    this.todos = response.data
  },
  data() {
    return {
      todos: [],
    }
  },
}
</script>
