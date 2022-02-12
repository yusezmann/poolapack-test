<template>
    <div class="h-14">
        <div
            :class="[
                accent ? 'bg-accent' : 'bg-yellow',
                'flex flex-row',
                'relative',
                'border-yellow',
                'rounded-l-lg',
                'w-17',
                'h-8',
                'text-center',
                'absolute',
                'z-[99]',
            ]"
        >
            <span
                :class="[
                    sale ? 'line-through' : 'hidden',
                    'ml-3',
                    'text-xs',
                    'absolute',
                    'top-0',
                ]"
                >Rp.{{ harga }}</span
            >
            <span class="ml-3 text-xs absolute top-4">Rp.{{ hargaSale }}</span>
        </div>
        <div
            class="
                flex flex-row
                border
                bg-coklat
                rounded-b-lg
                w-14
                h-12
                text-white text-center
                relative
                bottom-8
                left-5
            "
        >
            <span class="absolute top-8 left-2 text-[8px]"
                >{{ qty }} meter</span
            >
        </div>
    </div>
</template>

<script>
export default {
    props: {
        harga: {
            type: Number,
            default: () => '10000',
        },
        hargaSale: {
            type: Number,
            default: () => '10000',
        },
        qty: {
            type: Number,
            default: () => '1000',
        },
        accent: {
            type: Boolean,
            default: () => false,
        },
        sale: {
            type: Boolean,
            default: () => false,
        },
    },
}
</script>

<style></style>
