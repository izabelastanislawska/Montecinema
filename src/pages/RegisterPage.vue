<template>
    <section>
        <LogInRegisterHeader/>
        <RegisterCard/>
    </section>
</template>

<script>
import LogInRegisterHeader from "@/components/LogInRegisterHeader.vue";
import RegisterCard from "@/components/RegisterCard.vue";

export default {
    components: {
        LogInRegisterHeader,
        RegisterCard
    }
}
</script>