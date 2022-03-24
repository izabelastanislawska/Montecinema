<template>
    <label>
        <span
            v-if="label"
            class="base-input__label">
            {{ label }}
            </span>
        <select 
            :value="value"
            @change="$emit('input', $event.target.value)">
            <option disabled value=""> {{ placeholder }}</option>
            <option 
                v-for="option in selectOptions"
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
            selectOptions: {
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

<style lang="scss">

</style>
