<template>
    <v-form ref="updateForm">
        <v-text-field label="Title" :value="$store.state.selectedPost.title" v-model="post.title" required>
        </v-text-field>
        <v-text-field label="Body" :value="$store.state.selectedPost.body" v-model="post.body" required></v-text-field>

        <v-btn @click="submit" class="info">
            Update
        </v-btn>

        <!-- <p>{{$store.state.selectedPost.title}}</p> -->
    </v-form>
</template>

<script>
export default {
    updated() {
        this.post = this.$store.getters.getSelectdPost
    },
    data: () => ({
        post: {},
    }),

    methods: {
        submit() {
            this.$store.dispatch('updatePost', this.post)
            // .then(res => alert('Post Updated Successfully . . . 👍'))
            // .finally(res => this.post = {})
        }
    }
};
</script>