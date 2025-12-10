<template>
    <button v-if="props.href === null" :class="applyTheme()">
        <slot/>
    </button>
    <a v-else-if="props.href !== null" :href="props.href" :class="applyTheme()">
        <slot/>
    </a>
</template>
<script setup lang="ts">
    const props = withDefaults(
        defineProps<{
            theme?: "primary" | "secondary"
            href?: string | null
        }>(), {
            theme: "primary",
            href: null
        }
    )

    const applyTheme = () => {
        const style = [];

        style.push('px-4 py-2 text-center border-b-4 rounded-md transition duration-300');

        switch(props.theme) {
            case "primary": {
                style.push("bg-red-600 border-red-700 text-red-50 hover:bg-red-500");
                break;
            }
            case "secondary": {
                style.push("bg-neutral-300 border-neutral-400 text-neutral-700 hover:bg-neutral-200");
                break;
            }
        }

        return style.join(" ");
    }
</script>