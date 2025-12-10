<template>
    <div class="absolute bottom-1 bg-white w-full border-t-4 border-red-600 px-4 py-2 flex flex-col">
        <div class="flex items-center justify-between">

            <div class="flex flex-col">
                <span class="font-bold text-lg">
                    This website needs cookies to function.
                </span>

                <span class="text-sm">
                    
                    Using the buttons to the right, you may choose whether you allow us to store optional cookies. Additionally, you may view our cookie declaration.
                </span>
                <span class="mt-2 text-xs">
                    <span class="font-bold">Note: </span>
                    We will store a single cookie (<span class="px-0.5 bg-gray-200 text-gray-500">cookie_preference</span>) to remember your cookie preference
                </span>
            </div>
            
            <div class="flex flex-col gap-1">
                <div class="flex gap-2  w-full">
                    <AppFormButton @click="saveCookies(true)" theme="success">
                        Allow Cookies
                    </AppFormButton>
                    

                    <AppFormButton @click="saveCookies(false)"  theme="primary">
                        Refuse Cookies
                    </AppFormButton>
                </div>
            
                <AppFormButton @click="managePreferences = true;" theme="secondary">
                    Cookie Declaration
                </AppFormButton>
            </div>
        </div>

        <AppModal :show="managePreferences" @close="managePreferences = false">
            <div class="flex flex-col gap-2">
                <span class="font-bold">
                    Our website needs cookies to function.
                </span>
                <span class="text-sm">
                    We only use cookies to store your <span class="font-bold">language</span>, <span class="font-bold">dark mode</span> and <span class="font-bold">cookie</span> preferences.
                </span>

                <div class="mt-4 flex flex-col gap-4">
                    <div v-for="cookie in CookieRepository" class="flex flex-col gap-2 bg-gray-50 border border-gray-200 rounded p-4">
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-600 font-bold">
                                Name:
                            </span>
                            <span class="text-sm">
                                {{cookie.name}}
                            </span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-600 font-bold">
                                Stored as:
                            </span>
                            <span class="font-mono text-sm bg-gray-200 border border-gray-100 rounded text-gray-700 w-fit px-2 py-0.5">
                                {{ cookie.slug }}
                            </span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs text-gray-600 font-bold">
                                Description:
                            </span>
                            <span class="text-sm">
                                {{cookie.description}}
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center gap-4">
                        <AppFormButton theme="success" @click="saveCookies(true)" class="w-full">
                            I consent to cookies
                        </AppFormButton>

                        <AppFormButton @click="saveCookies(false)" class="w-full">
                            I do NOT consent
                        </AppFormButton>
                    </div>
                    <AppFormButton @click="managePreferences = false" theme="secondary" class="w-full">
                        Close
                    </AppFormButton>
                </div>
            </div>
        </AppModal>
    </div>

</template>
<script setup lang="ts">
    import { CookieRepository } from '../composables/cookies';

    const showCookieBanner = defineModel();
    const managePreferences = ref<boolean>(false);

    const saveCookies = (choice: boolean) => {
        if(choice) {
            setCookiePreference('true');
        }
        else setCookiePreference('false');

        managePreferences.value = false;
        showCookieBanner.value = false;
    }

</script>