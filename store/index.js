export const state = () => ({
    posts: [],
    selectedPost: {},
})

export const getters = {
    getSelectdPost: (state) => {
        return {
            id: state.selectedPost.id,
            title: state.selectedPost.title,
            body: state.selectedPost.body,
        }
    }
}

export const mutations = {
    set_post(state, posts) {
        state.posts = posts
    },
    add_post(state, post) {
        state.posts.unshift(post)
    },
    delete_post(state, id) {
        state.posts.splice(state.posts.findIndex(e => e.id == id), 1);
    },
    update_post(state, { id, title, body }) {
        const index = state.posts.findIndex(e => e.id == id);

        state.posts[index].title = title
        state.posts[index].body = body
    },
    set_selectedPost(state, id) {
        const index = state.posts.findIndex(e => e.id == id);
        state.selectedPost = {
            id: state.posts[index].id,
            title: state.posts[index].title,
            body: state.posts[index].body,
        }
    },
    reset_selectedPost(state) {
        state.selectedPost = {}
    }
}

export const actions = {
    fetchPosts(state) {

        return this.$axios.$get(`posts`)
            .then(res => state.commit('set_post', res.payload.data))
            .catch(err => console.log(err))
    },
    addPost(state, { title, body }) {

        return this.$axios.$post(`posts`, { title, body })
            // .then(res => state.commit('add_post', res.payload))
            .then(res => state.dispatch('fetchPosts'))
            .catch(err => console.log(err))
    },
    updatePost(state, { id, title, body }) {

        return this.$axios.$put(`posts/${id}`, { title, body })
            .then(res => state.commit('update_post', { id, title, body }))
            .catch(err => console.log(err))
            .finally(res => state.commit('reset_selectedPost'))
    },
    deletePost(state, id) {

        return this.$axios.$delete(`posts/${id}`)
            // .then(res => state.commit('delete_post', id))
            .then(res => state.dispatch('fetchPosts'))
            .catch(err => console.log(err))
    }
}