<template>
    <div>
        Title : {{ todo.title }} <br>
        Completed : {{ todo.completed }}
    </div>
</template>

<script>
export default {
    mounted() {
        let id = this.$route.params.id;

        this.$axios.$get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.todo = res)
            .catch(err => console.log(err))
    },
    data() {
        return {
            todo: {
                title: 'Loading ...',
                completed: 'Loading ...',
            }

        }
    },
}
</script>