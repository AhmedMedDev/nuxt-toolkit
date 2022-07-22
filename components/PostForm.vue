<template>
    <v-form ref="form" >
        <v-text-field label="Title" v-model="post.title"  required></v-text-field>
        <v-text-field label="Body" v-model="post.body"  required></v-text-field>

        <v-btn @click="submit" class="success">
            submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        post : {},
    }),

    methods: {
        submit() {
            this.$store.dispatch('addPost', this.post)
            // .then(res => alert('Post Added Successfully . . . 👍'))
            // .finally(res => this.post = {})
        },
        clear() {
            this.$refs.form.reset();
        }
    }
};
</script>