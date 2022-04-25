<template>
    <section class="container">
        <LogInRegisterHeader/>
        <RegisterCardSecondStep/>
    </section>
</template>

<script>
import LogInRegisterHeader from "@/components/LogInRegisterHeader.vue";
import RegisterCardSecondStep from "@/components/RegisterCardSecondStep.vue";

export default {
    components: {
        LogInRegisterHeader,
        RegisterCardSecondStep
    }
}
</script>
