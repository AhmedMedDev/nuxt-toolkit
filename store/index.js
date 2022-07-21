export const state = () => ({
    posts: []
})

export const mutations = {
    SET_POST(state, posts) {
        state.posts = posts
    },
    ADD_POST(state, post) {
        state.posts.push(post)
    },
    REMOVE_POST(state, post) {
        state.posts.push(post)
    }
}

export const actions = {
    async fetchPosts(state) {

        const response = await this.$axios.$get('posts')
        state.commit('SET_POST', response.payload.data)
    },
    async deletePost(state, id) {
        
        const response = await this.$axios.$delete(`posts/${id}`)
        state.commit('SET_POST', response.payload.data)
    }
}