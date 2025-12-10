<template>
    <header class="w-full border-b-2 border-gray-300">
        <nav class="container mx-auto max-w-7xl py-4 grid grid-cols-[auto_1fr_auto]  gap-12">
            <AppLogo/>

            <section class="flex justify-center items-center gap-12 text-gray-600">

                <div class="flex items-center">
                    <span>
                        Browse Topics
                    </span>
                    <IconChevronDown class="size-5"/>
                </div>
                
                <div class="flex items-center gap-2">

                    <IconGithub class="size-5"/>
                    <span>
                        Contribute
                    </span>
                </div>
            </section>

            <section class="flex items-center gap-4 text-gray-400">
                <div class="flex gap-1">
                    <IconLanguage class="size-5"/>
                    <IconChevronDown class="size-4"/>
                </div>
                <span>
                    <IconSun class="size-5"/>
                </span>
                <AppFormSearch/>
            </section>
        </nav>
    </header>
</template>