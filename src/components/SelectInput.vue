<template>
    <label>
        <span
        v-if="label"
        class="base-input__label">
        {{ label }}
        </span>
        <select v-model="selected"> 
            <option
            :v-for="option in options"
            :value="option.value">
                {{ option.text }}
            </option>
            <!-- <option disabled value="">All categories</option>
            <option> Action </option>
            <option> Comedy </option>
            <option> Family </option>
            <option> Fantasy </option>
            <option> Romance </option>
            <option> Sci-fi </option> -->
        </select>
    </label>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                selected: 'A',
                options: []
            }
        }
    }
</script>

<style lang="scss">

</style>
