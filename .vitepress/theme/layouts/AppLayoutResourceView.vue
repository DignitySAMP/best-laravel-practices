<template>
    <AppLayoutHeader/>
    <AppLayoutBody>
        <div class="flex text-gray-500 gap-2 mt-8 mb-8">
            <IconRedirect class="size-6"/>
            <a href="/" class="hover:underline">
                Back to Library
            </a>
        </div>
        <figure class="mt-8 w-full px-6 py-4 border border-gray-300 rounded-lg flex flex-col gap-2">
            <span class="font-semibold text-3xl tracking-tight px-3 py-1 bg-red-600 text-white w-fit rounded-lg">{{ frontmatter.title }}</span>
            <span class="text-1xl">{{ frontmatter.description }}</span>
        </figure>

        <section class="mt-8 grid grid-cols-[1fr_auto]">
            <aside class="flex flex-col min-w-64 border-r border-gray-200">
                <span class="text-sm text-gray-500">Added by</span>
                <span class="text-lg font-bold text-red-400">{{ frontmatter.author }}</span>
                <span class="text-gray-500">{{ new Date(frontmatter.date).toDateString() }}</span>
            </aside>

            <article class="mt-4 prose pl-12">
                <Content/>
            </article>
        </section>
    </AppLayoutBody>
</template>
<script setup lang="ts">

const { frontmatter } = useData()
</script>