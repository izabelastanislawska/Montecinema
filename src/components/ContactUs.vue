<template>
    <section class="container contact-us">
        <BiggestHeader text="Contact us" class="header--black"/>
        <section class="address__wrapper">
            <address>
                <div class="img__wrapper">
                    <img src="@/assets/pin-location.svg" alt="Pin location icon" class="address__img">
                    <p>Monterail Sp. z o.o. <br>
                    Ul. Oławska 27-29 <br>
                    50-123 Wrocław <br>
                    Poland </p><br>
                </div>
                <div class="img__wrapper">
                    <img src="@/assets/email-action-unread.svg" alt="Unread email action" class="address__img">
                    <p>hello@monterail.com </p><br>
                </div>
                <div class="img__wrapper">
                    <img src="@/assets/phone1.svg" alt="Phone icon" class="address__img">
                    <p>+48 533 600 136</p>
                </div>
            </address>
        </section>
    </section>
</template>

<script>
import BiggestHeader from '@/components/BiggestHeader.vue';

export default {
    components: {
        BiggestHeader
    }
}

</script>

<style scoped lang="scss">
.contact-us {
    margin: 12rem auto;
    width: 30%;
    text-align: center;
}

.address__wrapper {
    background-color: $tag-grey-color;
    border-radius: 24px;
    padding: 4rem;
    font-size: 1.8rem;
    line-height: 3.2rem;
    margin-top: 3rem;
    text-align: left;
}

.address__img {
    align-self: flex-start;
    margin-right: 1rem;
}

.img__wrapper {
    display: flex; 
    margin: 3rem;
}

</style>
