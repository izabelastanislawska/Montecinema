<template>
    <label class="select__wrapper">
        <span
            v-if="label"
            class="select__label">
            {{ label }}
            </span>
        <select 
            :value="value"
            @change="$emit('input', $event.target.value)"
            class="select">
            <option value=""> {{ placeholder }}</option>
            <option 
                v-for="option in options"
                :key="option.value"
                :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </label>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                require: true
            },
            label: {
                type: String,
                default: ''
            },
            value: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
.select {
    font-size: 1.8rem;
    color: $placeholder-color;
    background-color: $input-color;
    padding: 1.7rem 2.4rem;
    border-radius: 8px;
    border: none;
    &__label {
        font-size: 1.4rem;
        font-weight: 700;
        text-transform: uppercase;
        color: $button-color;
        align-self: flex-start;
        margin-bottom: 2rem;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        width: 30%;
    }
}

</style>
