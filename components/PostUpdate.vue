<template>
    <v-form ref="updateForm">
        <v-text-field label="Title" v-model="post.title" required></v-text-field>
        <v-text-field label="Body" v-model="post.body" required></v-text-field>

        <v-btn @click="submit" class="info">
            Update
        </v-btn>
        
        <!-- <p>{{$store.state.selectedPost.title}}</p> -->
    </v-form>
</template>

<script>
export default {
    created() {
        this.post = this.$store.getters.getSelectdPost
    },
    data: () => ({
        post: {},
    }),

    methods: {
        submit() {
            this.$store.dispatch('addPost', this.post)
                .then(res => alert('Post Added Successfully . . . 👍'))
            // .finally(res => this.post = {})
        },
        clear() {
            this.$refs.form.reset();
        }
    }
};
</script>