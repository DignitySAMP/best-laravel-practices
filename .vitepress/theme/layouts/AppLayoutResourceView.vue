<template>
    <AppLayoutHeader/>
    <AppLayoutBody>
        <a href="/resources" id="top" class="flex text-gray-500 gap-2 mt-8 mb-8 items-center hover:underline group">
            <IconRedirect class="size-6" />
            <span>Back to Library</span>
        </a>

        <figure class="mt-8 w-full px-8 py-8 border border-gray-300 rounded-xl flex flex-row gap-8 h-fit">
            <span class="font-semibold text-lg tracking-tight px-3 py-1 bg-laravel text-white w-fit h-fit rounded-full">
                Tip #{{ frontmatter.no }}
            </span>
            <div class="flex flex-col gap-4">
                <span class="font-semibold text-4xl tracking-tight">
                    {{ frontmatter.title }}
                </span>
                <span class="text-lg text-gray-500">
                    {{ frontmatter.description }}
                </span>
            </div>
        </figure>

        <section class="mt-8 grid grid-cols-[1fr_auto_1fr]">
            <aside class="flex flex-col min-w-64 border-r border-gray-200 pr-8">
                <span class="text-sm text-gray-500">Added by</span>
                <span class="text-lg font-bold text-laravel">{{ frontmatter.author }}</span>
                <span class="text-gray-500">{{ new Date(frontmatter.date).toDateString() }}</span>
            </aside>

            <article class="mt-4 prose pr-12 pl-12">
                <Content/>
            </article>

            <aside v-if="outline.length > 0" class="min-w-64 sticky top-4 self-start">
                <div class="pl-8">
                    <div class="flex items-center mb-4 gap-2">
                        <h2 class="font-semibold text-gray-700">On this page</h2>
                        <a href="#top" class="text-xs text-gray-500">Back to Top</a>
                    </div>
                    <nav class="flex flex-col gap-1 text-sm">
                        <a 
                            v-for="header in outline" :key="header.link" :href="header.link" 
                            :class="[
                                'block text-gray-600 hover:text-gray-900 transition-colors',
                                { 'pl-4': header.level === 2 },
                                { 'pl-8': header.level === 3 }
                            ]"
                        >
                            {{ header.title }}
                        </a>
                    </nav>
                </div>
            </aside>
        </section>
    </AppLayoutBody>
</template>
<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter } = useData()

// TODO: this should be built in with vitepress but couldnt find it, refactor SOON(tm)
// TODO: doesn't show up by default on fresh restart. possibly because the markdown gets cached and 
// doesn't update the DOM during startup...
const outline = ref<Array<{ title: string, link: string, level: number }>>([])
onMounted(() => {
    // build a 'on this page' list by lazily checking the DOM.
    const headings = document.querySelectorAll('article h1[id], article h2[id], article h3[id], article h4[id]')
    outline.value = Array.from(headings).map(h => ({
        title: h.textContent?.replace(/\s*#.*$/, '').trim() || '',
        link: '#' + h.id,
        level: parseInt(h.tagName.charAt(1))
    }))
})
</script>