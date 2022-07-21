<template>
    <v-form v-model="valid">
        <v-container class="pa-15">
            <v-textarea v-model="title" :rules="titleRules" label="Title" required></v-textarea>
            <v-switch v-model="completed" :label="`Switch 1: ${completed.toString()}`"></v-switch>
            <v-btn color="success" class="mr-4" @click="save">Save</v-btn>
        </v-container>
    </v-form>
</template>

<script>
import axios from 'axios'
export default {
    methods: {
        async save() {
            let response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                title : this.title,
                completed : this.completed,
            })

            console.log(response);
            // axios base url
            // success alert
            // redirct to /
            
        }
    },
    data: () => ({
        valid: false,
        title: '',
        completed: '',
        titleRules: [
            v => !!v || 'title is required'
        ]
    }),
}
</script>