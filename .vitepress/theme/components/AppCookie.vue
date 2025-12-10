<template>
    <div class="absolute bottom-1 bg-white w-full border-t-4 border-red-600 px-4 py-2 flex flex-col">
        <div class="flex items-center justify-between">
            <div class="flex flex-col">
                <span class="font-bold text-lg">
                    This website uses cookies.
                </span>
                <span>
                    We only use <span class="font-bold">mandatory</span> cookies to store your <span class="font-bold">language</span> and  <span class="font-bold">dark mode preferences</span>. Additionally, we store your cookie preference (true or false) in your browser's local storage.
                    These cookies are mandatory for the website to function. We do not track or store anything else.
                </span>
            </div>
            <div class="flex gap-2 px-6 w-fit">
                <AppFormButton @click="managePreferences = true;" class="w-full flex" theme="primary">
                    Show preferences
                </AppFormButton>
            </div>
            <span @click="showCookieBanner = false">
                x
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">

    const showCookieBanner = defineModel();
    const managePreferences = ref<boolean>(false);
</script>