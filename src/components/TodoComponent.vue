<template>
    <div class="todo">
        <div class="todo__head">
            <div @click="changeStatus" v-show="done" class="doneIcon grow pointer">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="todo__actions">
                <i @click="editTodo" class="fas fa-pen-square editLogo grow pointer"></i>
                <i @click="deleteTodo" class="fas fa-trash deleteLogo grow pointer"></i>
            </div>
        </div>
        <div class="todo__title">{{ title }}</div>
        <div class="todo__description">{{ description }}</div>
        <div class="todo__data">
            <div class="todo__author">{{ author }}</div>
            <div class="todo__date">{{ createdDate }}</div>
        </div>
        <div class="todo__mark" v-if="!done">
            <input type="checkbox" class="finishCheckbox" v-model="done">
            <label for="checkbox">Mark as Finished</label>
        </div>
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
        },
        methods:{
            changeStatus: function(){
                this.done = !this.done;
            },
            deleteTodo: function(){

            },
            editTodo: function(){

            }
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
        border-radius: 16px;
        padding: 20px;
        gap: 5px;
    }
    .todo__head{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .doneIcon{
        color: #00D100;
        font-size: 20px;
    }
    .todo__actions{
        display: flex;
        flex-direction: row;
        margin-left: auto;
        gap: 5px;
        align-items: center;
    }
    .editLogo{
        color: #DD8F0E;
        font-size: 24px;
    }
    .deleteLogo{
        color: #f00e0e;
        font-size: 20px;;
    }
    .todo__title{
        font-weight: 600;
        text-align: center;
        font-size: 20px;
    }
    .todo__description{
        font-weight: 500;
        font-size: 18px;
        color: rgba(20,20,25, 0.9);
        height: 100px;
    }
    .todo__data{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 500;
        color: #575767;
        padding: 0px 5px;
    }
    .todo__mark{
        margin-left: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 12px;
        color: grey;
        margin-top: 10px;
        margin-right: 5px;
        gap: 5px;
    }
</style>