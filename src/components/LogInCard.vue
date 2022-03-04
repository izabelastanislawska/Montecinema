<template>
    <section>
        <h1>Hi there!</h1>
        <span>Care to log in?</span>
        <form @submit="onSubmit">
            <CustomInput 
                v-model="email"
                label="email"
                placeholder="Enter your e-mail"
                type="text"/>
            <CustomInput
                v-model="password"
                label="password"
                placeholder="Enter your password"
                type="password"/>
            
            <button>Register instead</button>
            <button
            type="submit"
            @click="onClick">Log in</button>
        </form>
    </section>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";

export default {
    components: {
        CustomInput,
    },
    data() {
        return {
            name: 'name',
            email: '',
            password: ''
        }
    },
    methods: {
        onClick() {
            console.log(this.email,this.password)
        },
        onSubmit(event) {
            event.preventDefault();
        }
    }
}
</script>