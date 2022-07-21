export const state = () => ({
    posts: [],
    selectedPost: {
        title: '',
        body: '',
    },
})

export const getters = {
    getSelectdPost: (state) => {
        return {
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
        state.posts.push(post)
    },
    delete_post(state, id) {
        state.posts.splice(state.posts.findIndex(e => e.id == id), 1);
    },
    set_selectedPost(state, id) {

        const index = state.posts.findIndex(e => e.id == id);

        state.selectedPost = {
            title: state.posts[index].title,
            body: state.posts[index].body,
        }
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
            .then(res => state.commit('add_post', res.payload))
            .catch(err => console.log(err))
    },
    deletePost(state, id) {

        return this.$axios.$delete(`posts/${id}`)
            .then(res => state.commit('delete_post', id))
            .catch(err => console.log(err))
    }
}