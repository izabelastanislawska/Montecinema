<template>
    <section class="container login-register__wrapper">
        <div class="header__wrapper">
            <h1 class="header__big header--black">Ahoy you!</h1>
            <h1 class="header__big header--grey">Care to register?</h1>
        </div>
        <form @submit.prevent="onSubmit" novalidate>
            <CustomInput 
                v-model="email"
                label="email"
                placeholder="Something ending with monterail.com"
                type="email"
                @blur="emailTouched = true"/>
            <PasswordInput
                v-model="password"
                label="password"
                placeholder="Enter your password"
                @blur="passwordTouched = true"
                />
                <p> {{ emailError }}</p>
                <p>{{ passwordError }}</p>
                <p :class="{red: !passwordLength && passwordTouched}">At least 8 characters</p>
                <p :class="{red: !passwordLetters && passwordTouched}">At least one letter</p>
                <p :class="{red: !passwordDigits && passwordTouched}">At least one digit</p>
            <router-link to="/login" class="header__link">Log in instead</router-link>
            <button class="button button--small"
            type="submit" :disabled="!isFormValid">Next step</button>
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
            password: '',
            emailTouched: false,
            passwordTouched: false
        }
    },
    methods: {
        onSubmit() {
            this.touchAll();
            if (this.isFormValid) {
                console.log(`Email: ${this.email}, Password: ${this.password}`)
            }
        },
        touchAll() {
            this.emailTouched = true;
            this.passwordTouched = true;
        },
        isEmailValid(email) {
            let emailRegExp =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return email && emailRegExp.exec(email);
        }
    },
    computed: {
        passwordError() {
            if (!this.passwordTouched) {
                return "";
            }
            if (!this.password) {
                return "Please enter your password";
            }
            return "";
        },
        emailError() {
            if (!this.emailTouched) {
                return "";
            }
            if (!this.email) {
                return "Please enter your email";
            }
            if (!this.isEmailValid(this.email)) {
                return "Please enter valid email address";
            }
            return "";
        },
        passwordLength() {
            return this.password.length > 7;
        },
        passwordLetters() {
            return /[a-z]/.test(this.password);
        },
        passwordDigits() {
            return /\d/.test(this.password);
        },
        isPasswordValid() {
            return (
            this.password && this.passwordLength && this.passwordLetters && this.passwordDigits
            );
        },
        isFormValid() {
            return !this.emailError && !this.passwordError;
        },
    }
}

</script>

<style lang="scss" scoped>
.red {
    color: red;
}
.green {
    color: green;
}
</style>