<template>
    <section class="container login-register__wrapper">
        <div class="header__wrapper">
            <h1 class="header__big header--black">Hi there!</h1>
            <h1 class="header__big header--grey">Care to log in?</h1>
        </div>
        <form class="">
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
            <router-link to="/register" class="header__link"> Register instead</router-link>
            <button class="button button--small"
            type="submit"
            @click="onClick">Log in</button>
        </form>
        <p>Did you forgot you password? <a href="#">Reset it now</a></p>
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

<style lang="scss">



</style>