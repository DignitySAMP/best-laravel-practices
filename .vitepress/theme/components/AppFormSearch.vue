<template>
    <div class="relative">

        <div 
            class="w-full border border-gray-300 bg-gray-100 text-gray-400 rounded-lg" 
            @click="isSearchMenuOpen = true"
        >
            <div class="relative px-4 flex gap-2 items-center">
                <IconMagnifyingGlass class="size-5"/>
                <span class="py-2 select-none">
                    Search
                </span>

                <kbd class="flex gap-1 text-sm text-gray-400 bg-gray-200 items-center px-2 py-1 rounded">
                    <span class="size-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10 8h4V6.5a3.5 3.5 0 1 1 3.5 3.5H16v4h1.5a3.5 3.5 0 1 1-3.5 3.5V16h-4v1.5A3.5 3.5 0 1 1 6.5 14H8v-4H6.5A3.5 3.5 0 1 1 10 6.5zM8 8V6.5A1.5 1.5 0 1 0 6.5 8zm0 8H6.5A1.5 1.5 0 1 0 8 17.5zm8-8h1.5A1.5 1.5 0 1 0 16 6.5zm0 8v1.5a1.5 1.5 0 1 0 1.5-1.5zm-6-6v4h4v-4z"/></svg>
                    </span>
                    <span>
                        K
                    </span>
                </kbd>
            </div>
        </div>
    
        <Teleport to="body">
            <Transition
                enter-active-class="transition-opacity duration-200"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <div
                    v-if="isSearchMenuOpen"
                    class="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-[10vh]"
                    @click="isSearchMenuOpen = false"
                >
                    <div
                        @click.stop
                        class="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 overflow-hidden"
                    >

                        <div class="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                            <IconMagnifyingGlass class="size-5 text-gray-400" />
                            <input
                                ref="searchInput"
                                v-model="query"
                                type="text"
                                placeholder="Search documentation..."
                                class="flex w-full outline-none text-lg"
                                @keydown.down.prevent="selectNext"
                                @keydown.up.prevent="selectPrev"
                                @keydown.enter.prevent="submitSelect"
                                @keydown.esc="isSearchMenuOpen = false"
                            />
                            <button 
                                @click="isSearchMenuOpen = false" 
                                class="text-gray-400 hover:text-gray-600"
                        >
                                <IconClose class="size-5" />
                            </button>
                        </div>
        

                        <div class="max-h-96 overflow-y-auto">
                            <div v-if="query && results.length === 0" class="px-4 py-8 text-center text-gray-500">
                                No results found for "{{ query }}"
                            </div>
            
                            <div v-else-if="query" class="py-2">
                                <a
                                    v-for="(result, index) in results"
                                    :key="result.url"
                                    :href="result.url"
                                    @click="isSearchMenuOpen = false"
                                    :class="[
                                        'block px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer',
                                        { 'bg-gray-100': index === selectedIndex }
                                    ]"
                                    @mouseenter="selectedIndex = index"
                                >
                                    <span class="font-semibold text-gray-900">{{ result.title }}</span>
                                    <div v-if="result.text" class="text-sm text-gray-600 mt-1 line-clamp-2">
                                        {{ result.text }}
                                    </div>
                                </a>
                            </div>

                            <div v-else class="px-4 py-8 text-center text-gray-400 text-sm">
                                Start typing to search...
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
  
<script setup lang="ts">
    // TODO: Clean up front-end
    // TODO: include mark.js for highlighting
    import { ref, watch, computed, onMounted, onUnmounted } from 'vue'
    import { useRouter } from 'vitepress'
    import {data} from '../../data/search.data'

    const isSearchMenuOpen = ref(false)
    
    /*
    ** Build search results in memory using @/data/search.data.ts
    */
    interface SearchResult {
        title: string
        url: string
        text?: string
    }

    const query = ref<string>('');
    const results = computed<SearchResult[]>(() => {
        if (!query.value) return []
        
        const searchQuery = query.value.toLowerCase()
        const pages: SearchResult[] = []

        if (data) {
            data.forEach((pageResult: any) => {
                const page = pageResult.frontmatter;

                const title = page.title || ''
                const text = page.text || page.description || ''
                
                // match if query matches title or text
                if (
                    title.toLowerCase().includes(searchQuery) ||
                    text.toLowerCase().includes(searchQuery)
                ) {
                    pages.push({
                        title: title,
                        url: pageResult.url,
                        text: text.slice(0, 150)
                    })
                }
            })
        }
        
        return pages.slice(0, 15) // limit 15 results
    })
    
    /*
    ** Keyboard navigation
    */
    const router = useRouter();
    const selectedIndex = ref<number>(0);
    const selectNext = () => selectedIndex.value = Math.min(selectedIndex.value + 1, results.value.length - 1); // down
    const selectPrev = () => selectedIndex.value = Math.max(selectedIndex.value - 1, 0) // up
    const submitSelect = () => { // enter
        if (results.value[selectedIndex.value]) {
            router.go(results.value[selectedIndex.value].url)
            isSearchMenuOpen.value = false
        }
    }
    /*
    ** DIY cmd+k or ctrl+k
    */
    onMounted(() => document.addEventListener('keydown', handleKeydown));
    onUnmounted(() => document.removeEventListener('keydown', handleKeydown));
    const handleKeydown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault()
            isSearchMenuOpen.value = !isSearchMenuOpen.value
        }
    }

    /*
    ** Focus input on open + reset index and query
    */
    const searchInput = ref<HTMLInputElement | null>(null);
    watch(isSearchMenuOpen, (newVal) => {
        if (newVal) {
            setTimeout(() => searchInput.value?.focus(), 100);
            query.value = ''
            selectedIndex.value = 0
        }
    })
</script>