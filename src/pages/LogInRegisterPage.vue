<template>
    <section>
        <LogInRegisterHeader/>
        <LogInCard/>
    </section>
</template>

<script>
import LogInRegisterHeader from '../components/LogInRegisterHeader.vue';
import LogInCard from '../components/LogInCard.vue';


export default {
  name: 'App',
  components: {
    LogInRegisterHeader,
    LogInCard
  }
}

</script>