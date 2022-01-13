<template>
    <div class="todo">
        {{ title }}
        {{ description }}
        {{ author }}
        {{ done }}
        {{ createdDate }}
        {{ finishedDate }}
    </div>
</template>

<script>
    export default{
        name: 'TodoComponent',
        components: {
            
        },
        props: {
            title: String,
            description: String,
            author: String,
            done: Boolean,
            createdDate: String,
            finishedDate: String
        }
    }
</script>

<style scoped>
    .todo{
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        width: 240px;
        color: #141419;
        border-radius: 12px;
        padding: 20px;
    }
</style>