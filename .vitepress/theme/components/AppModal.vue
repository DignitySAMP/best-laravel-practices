<template>
    <Transition
        enter-active-class="transition transform duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        
        leave-active-class="transition transform duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-if="props.show"
            class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            @click="emit('close')"
        >
            <div class="mx-4 w-full max-w-md rounded-md bg-white p-6" @click.stop>
                <slot />
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps<{
    show: boolean
}>();
const emit = defineEmits(['close']);
</script>