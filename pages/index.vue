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
</template>

<script>
import axios from 'axios'
export default {
  async created() {

    let response = await axios.get('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=5');

    this.todos = response.data
  },
  methods: {
    async remove (id) {
      let response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

      console.log(response);
    }
  },
  data() {
    return {
      completed : false,
      todos: [],
    }
  },
}
</script>
