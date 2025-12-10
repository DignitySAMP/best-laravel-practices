<template>
    <div
        class="relative w-14 h-7 bg-white border border-gray-200 rounded-full cursor-pointer"
        @click="onClickButton()"
    >
        <div
            class="absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-all duration-300 border-2 border-white"
            :class="styleSlidingButton()"
        />
    </div>
</template>

<script setup lang="ts">
    const model = defineModel();
    const props = withDefaults(defineProps<{
        disabled?: boolean
    }>(), {
        disabled: false
    });

    const onClickButton = () => {
        if(props.disabled) {
            return false;
        }

        model.value = !model.value;
    }
    const styleSlidingButton = () => {
        const baseTranslate = model.value ? 'translate-x-7' : 'translate-x-0';
        const bgColor = (props.disabled
            ? model.value ? 'bg-laravel-light' : 'bg-slate-300/50'
            : model.value ? 'bg-laravel' : 'bg-slate-300'
        );

        return [baseTranslate, bgColor].join(' ');
    };

</script>
