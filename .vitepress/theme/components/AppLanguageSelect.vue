<template>
    <div class="flex gap-1" @click="showLanguageDropdown = !showLanguageDropdown">
        <IconLanguage class="size-5"/>
        <IconChevronDown class="size-4"/>
    </div>
    <AppModal :show="showLanguageDropdown" @close="showLanguageDropdown = false">
        <div class="flex flex-col gap-4 text-neutral-700">
            <h1 class="text-2xl font-semibold">
                Change language
            </h1>
            <span>
                We aim to cover as many languages as possible to share our resources with as many different languages as possible.
            </span>

            <div class="flex flex-col gap-1">
                <span class="font-bold">
                    Available languages:
                </span>
                <div 
                    v-for="locale, index in locales" :key="index"
                    @click="changeLanguage(locale.lang)" 
                    class="transition duration-300 w-full flex items-center justify-between px-4 py-2 cursor-pointer border rounded"
                    :class="language == locale.lang ? 'bg-red-50 hover:bg-red-100 border-red-200' : 'bg-gray-50 hover:bg-gray-100 border-gray-300'"
                >
                    <span class="text-lg" v-html="locale.flag"/>
                    <span class="text-sm font-semibold">{{ locale.label }}</span>
                </div>
                <span class="mt-2 text-sm">
                    We are actively looking for people to help us add different languages. If you feel you might be able to help, please contribute!
                </span>
            </div>
        </div>
    </AppModal>
</template>
<script setup lang="ts">
import { setLanguagePreference, getLanguagePreference } from '../composables/cookies';
import { locales } from '../composables/locales';
const showLanguageDropdown = ref<boolean>(false);

const language = ref<string>(getLanguagePreference());
const changeLanguage = (lang: string) => {
    setLanguagePreference(lang);
    language.value = lang;
    adjustLocalizationURL();
}
// TODO: give warning incase cookies are disabled that this will not persist.
</script>