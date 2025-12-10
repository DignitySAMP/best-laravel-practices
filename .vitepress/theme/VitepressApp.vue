<template>
    <div class="relative h-screen">
        <AppLayoutError v-if="page.isNotFound"/>
        <AppLayoutIndex v-else-if="frontmatter.layout === 'home'" />
        <AppLayoutResource v-else-if="frontmatter.layout === 'resources'" />
        <AppLayoutDefault v-else>
            <Content />
        </AppLayoutDefault>


        <Transition
            enter-active-class="transition transform duration-300"
            enter-from-class="translate-y-full opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            
            leave-active-class="transition transform duration-300"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-full opacity-0"
        >
            <AppCookie v-if="showCookieBanner" v-model="showCookieBanner"/>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { useData, Content } from 'vitepress'
const { page, frontmatter } = useData()


const showCookieBanner = ref<boolean>(false);
onMounted(() => {

    // check if the user has already interacted with the cookie banner.
    if(getCookie('cookie_preference').length <= 0) {
        setTimeout(() => { // mini delay because animations are cool
            showCookieBanner.value = true;
        }, 500)
    }
})
</script>