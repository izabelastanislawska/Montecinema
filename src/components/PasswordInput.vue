<template>
    <label>
        <div class="span__wrapper">
            <span
                v-if="label"
                class="base-input__label">
                {{ label }}
            </span>
            
            <input 
                :value="value"
                @input="$emit('input', $event.target.value)"
                :placeholder="placeholder"
                :type="inputType"
                class="base-input__input"> 
                
                <button title="Show password" class="button__password" @click="ShowHidePassword">
                    <img src="@/assets/eyeCrossed.svg" alt="Show password" v-if="!showPassword" >
                    <img src="@/assets/eye.svg" alt="Hide password" v-else>
                </button>
            
        </div>
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showPassword: false
            }
        },
        methods: {
            ShowHidePassword(event) {
                event.preventDefault();
                this.showPassword = !this.showPassword;
            }
        },
        computed: {
            inputType() {
                return this.showPassword ? "text" : "password";
            }
        }
    }
</script>

<style lang="scss">
.base-input {
    &__label {
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
        color: $button-color;
        align-self: flex-start;
        margin-bottom: 2rem;
    }
    &__input {
        font-family: $secondary-font;
        font-size: 1.8rem;
        color: $placeholder-color;
        background-color: $input-color;
        padding: 1.7rem 4rem 1.7rem 2.4rem;
        border-radius: 8px;
        border: none;
        margin-bottom: 5rem;
        position: relative;
    }
    &__input:hover {
        background-color: $input-hover-color;
    }
    &__input:focus {
        border: none;
        outline: 1px $input-border-color solid;
        background-color: $input-background-color;
    }
}

.span__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
}

.button__password {
    border: none;
    background: none;
    position: absolute;
    top: 30%;
    right: 10px;
    cursor: pointer;
    opacity: 1;
}

</style>