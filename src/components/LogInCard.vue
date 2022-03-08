<template>
    <section>
        <h1>Hi there!</h1>
        <span>Care to log in?</span>
        <form>
            <CustomInput 
                v-model="email"
                label="email"
                placeholder="Enter your e-mail"
                type="text"/>
            <PasswordInput
                v-model="password"
                label="password"
                placeholder="Enter your password"
                />
            <button>Register instead</button>
            <button
            type="submit"
            @click="onClick">Log in</button>
        </form>
    </section>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";

export default {
    components: {
        CustomInput,
        PasswordInput
    },
    data() {
        return {
            name: 'name',
            email: '',
            password: ''
        }
    },
    methods: {
        onClick(event) {
            console.log(this.email,this.password)
            event.preventDefault();
        }
    }
}
</script>
