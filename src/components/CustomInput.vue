<template>
    <label class="input__wrapper">
        <span
            v-if="label"
            class="base-input__label">
            {{ label }}
        </span>
        <input 
            :value="value"
            @input="$emit('input', $event.target.value)"
            :placeholder="placeholder"
            :type="type"
            class="base-input__input">
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
            },
            type: {
                type: String,
                default: 'text'
            }
        }
    }
</script>

<style lang="scss" scoped>
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
        padding: 1.7rem 2.4rem;
        border-radius: 8px;
        border: none;
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

.input__wrapper {
    display: flex;
    flex-direction: column;
}

</style>
