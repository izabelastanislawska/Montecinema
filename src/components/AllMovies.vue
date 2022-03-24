<template>
    <section>
        <BiggestHeader text="All the movies" theme="header--black"/>
        <div>
            <CustomInput
                v-model="search"
                label="search"
                placeholder="What are you looking for?"
                type="search">
            </CustomInput>
                    
            <SelectInput
                v-model="selectedOption"
                placeholder="All categories"
                label="category"
                :selectOptions="selectOptions">
            </SelectInput>
        </div>
    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';
import CustomInput from '@/components/CustomInput.vue';
import SelectInput from "@/components/SelectInput.vue";

export default {
    components: {
        BiggestHeader,
        CustomInput,
        SelectInput
    },
    data() {
        return {
            search: '',
            selectedOption: '',
            selectOptions: [
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
