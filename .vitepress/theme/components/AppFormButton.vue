<template>
    <button class="px-4 py-2  border-b-4 rounded-md transition duration-300" :class="applyTheme()">
        <slot/>
    </button>
</template>
<script setup lang="ts">
    const props = withDefaults(
        defineProps<{
            theme?: "primary" | "secondary"
        }>(), {
            theme: "primary"
        }
    )

    const applyTheme = () => {

        switch(props.theme) {
            case "primary": {
                return "bg-red-600 border-red-700 text-red-50 hover:bg-red-500";
            }
            case "secondary": {
                return "bg-neutral-300 border-neutral-400 text-neutral-700 hover:bg-neutral-200";
            }
        }
    }
</script>