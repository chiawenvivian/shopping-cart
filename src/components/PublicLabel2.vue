<!-- 插槽 -->
<script>
export default {
props: {
    valueData: {
    type: String,
    default: '',
    },
    content: {
    type: String,
    default: '',
    },
    required: Boolean,
},
// emits: ['update'],
data() {
    return {
    // newValue: this.valueData,
    };
},

methods:{
    // setValue(e) {
    //     this.$emit('update', e.target.value)
    // }
}
};
</script>

<template>
<div class="flex flex-col gap-y-2 text-white">
    <label for="name">
    {{ content }}
    <span v-show="required" class="text-red-500">*</span>
    </label>
    <!-- 開洞給父層使用 -->
    <slot/>
</div>
</template>