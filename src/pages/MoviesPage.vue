<template>
    <section class="container">
        <MainHeader/>
        <TheBreadcrumb/>
        <BiggestHeader text="All the movies" theme="header--black"/>
        <div>
            <CustomInput
                v-model="search"
                label="search"
                palceholder="What are you looking for?"
                type="search">
            </CustomInput>
                
            <SelectInput
                v-model="selected"
                placeholder="All categories"
                label="category"
                :options="options">
            </SelectInput>
        </div>
        
    </section>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import BiggestHeader from '@/components/BiggestHeader.vue';
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import CustomInput from '@/components/CustomInput.vue';
import SelectInput from "@/components/SelectInput.vue";

export default {
    components: {
        MainHeader,
        BiggestHeader,
        TheBreadcrumb,
        CustomInput,
        SelectInput
    },
    data() {
        return {
            search: '',
            label: '',
            selected: '',
            options: [
                { text: 'Action', value: 'B' },
                { text: 'Comedy', value: 'C' },
                { text: 'Family', value: 'D' },
                { text: 'Fantasy', value: 'E' },
                { text: 'Romance', value: 'F' },
                { text: 'Sci-fi', value: 'G' },
            ]
        }
    }
}
</script>

<style lang="scss">

</style>
