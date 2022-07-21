export const state = () => ({
    posts: []
})

export const mutations = {
    ADD_POST(state, post) {
        state.posts.push(post)
    }
}

export const actions = {
    async fetchPosts(state) {
        const response = await this.$axios.$get('posts')
        state.posts = response.payload.data
        return response.payload.data;
    }
}