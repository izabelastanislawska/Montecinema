<template>
    <section class="container login-register__wrapper">
        <div class="header__wrapper">
            <BiggestHeader text="Great!" class="header--black"/>
            <BiggestHeader text="Now your name" class="header--grey"/>
        </div>
        <form class="inputs__wrapper">
            <CustomInput
                v-model="text"
                label="first name"
                placeholder="e.g. Jessica"
                type="text"
                required
            />
            <CustomInput
                v-model="text"
                label="last name"
                placeholder="e.g. Walton"
                type="text"
                required
            />
            <CustomInput
                v-model="date"
                label="date of birth"
                placeholder="DD / MM / YYYY"
                type="date"
                required
            />
            <label class="privacy-policy__wrapper">
                <input type="checkbox"/>
                <p class="privacy-policy">I accept <a class="privacy-policy__link">Privacy Policy</a></p>
            </label>
            <div class="buttons__wrapper">
                <router-link :to="{ name: 'LogIn' }" class="header__link login__button">Log in instead</router-link>
                <router-link to="/" class="login__button">
                        <button class="button button--small register__button" type="submit">Register</button>
                </router-link>
            </div>
        </form>
        
    </section>

</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import CustomInput from '@/components/CustomInput.vue';

export default {
    components: {
        BiggestHeader,
        CustomInput
    },
    data() {
        return {
            text: "",
            date: "",
            checkbox: ""
        }
    }
}
</script>

<style lang="scss">
.privacy-policy {
    font-family: $secondary-font;
    font-size: 1.8rem;
    color: $text-color;
    margin: 0 0 5rem 0.5rem;
    &__link {
        text-decoration: underline;
    }
    &__wrapper {
        display: flex;
        align-content: center;
    }
}

</style>
