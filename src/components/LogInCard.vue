<template>
    <section class="container login-register__wrapper">
        <div class="header__wrapper">
            <h1 class="header__big header--black">Hi there!</h1>
            <h1 class="header__big header--grey">Care to log in?</h1>
        </div>
            <form class="inputs__wrapper">
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
                <div class="buttons__wrapper">
                    <router-link to="/register" class="header__link login__button"> Register instead</router-link>
                    <button class="button button--small login__button"
                    type="submit"
                    @click="onClick">Log in</button>
                </div>
            </form>
            <p class="login__text">Did you forget your password? 
                <a href="#" class="login__link">Reset it now</a></p>
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
.login-register__wrapper {
    width: 50%;
    padding-bottom: 12rem;
}
.inputs__wrapper {
    padding: 6rem;
    box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
    border-radius: 24px;
}
.buttons__wrapper {
    display: flex;
    align-items: center;
    text-align: center;
}
.login__button {
    width: 50%;
}

.login__text {
    font-family: $secondary-font;
    font-size: 1.6rem;
    margin-top: 4rem;
}

.login__link {
    color: $button-color;
}

</style>
