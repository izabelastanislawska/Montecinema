<template>
    <section class="container login-register__wrapper">
        <div class="header__wrapper">
            <BiggestHeader text="Ahoy you!" class="header--black"/>
            <BiggestHeader text="Care to register?" class="header--grey"/>
        </div>
        <form @submit.prevent="onSubmit" novalidate class="inputs__wrapper" data-spec="form">
            <CustomInput 
                v-model="email"
                label="email"
                placeholder="Something ending with monterail.com"
                type="email"
                @blur="emailTouched = true"
                data-spec='emailInput'
                />
            <PasswordInput
                v-model="password"
                label="password"
                placeholder="Enter your password"
                @blur="passwordTouched = true"
                data-spec='passwordInput'
                />
                <div class="validation__wrapper">
                    <p class="validation__text" data-spec="emailError">{{ emailError }}</p>
                    <p class="validation__text" data-spec='passwordError'>{{ passwordError }}</p>
                    <p class="validation__text" :class="{validation__error: !passwordLength && passwordTouched}" data-spec='pass-8-char'>At least 8 characters</p>
                    <p class="validation__text" :class="{validation__error: !passwordLetters && passwordTouched}" data-spec='pass-1-lett'>At least one letter</p>
                    <p class="validation__text" :class="{validation__error: !passwordDigits && passwordTouched}" data-spec='pass-1-dig'>At least one digit</p>
                </div>
                <div class="buttons__wrapper">
                    <router-link :to="{ name: 'LogIn' }" class="header__link login__button">Log in instead</router-link>
                        <button
                        class="button button--small register__button" 
                        type="submit" :disabled="!isFormValid">Next step</button>
                </div>
        </form>
    </section>
</template>

<script>
import CustomInput from "@/components/CustomInput.vue";
import PasswordInput from "@/components/PasswordInput.vue";
import BiggestHeader from '@/components/BiggestHeader.vue';

export default {
    name: "RegisterCard",
    components: {
        CustomInput,
        PasswordInput,
        BiggestHeader,
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

<style lang="scss">
.register__button {
    width: 100%;
}
.header__wrapper {
    margin: 4rem;
}
.validation__wrapper {
    margin-bottom: 3rem;
}
.validation__text {
    font-size: 1.4rem;
    font-family: $primary-font;
    line-height: 170%;
}
.validation__error {
    color: $button-color;
}
.validation__success {
    color: $success-color;
}
</style>
