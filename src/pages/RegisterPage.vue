<template>
    <section class="container">
        <LogInRegisterHeader/>
        <RegisterCard/>
        <RegisterCardSecondStep/>
    </section>
</template>

<script>
import LogInRegisterHeader from "@/components/LogInRegisterHeader.vue";
import RegisterCard from "@/components/RegisterCard.vue";
import RegisterCardSecondStep from "@/components/RegisterCardSecondStep.vue";

export default {
    components: {
        LogInRegisterHeader,
        RegisterCard,
        RegisterCardSecondStep
    },
    metaInfo: {
        title: 'Register to Montecinema!'
    }
}
</script>
