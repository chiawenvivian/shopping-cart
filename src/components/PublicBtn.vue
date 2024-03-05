<script>
export default{
    // 父層傳入的參數
    props: {
        content:{
            type: String,
            default:'',
        },
        color: {
            type: String,
            default:'',
        },
        icon:{
            type:[String, Number],
            default:'',
        },
    },
    data(){
        return{

        };
    },
    methods:{

    },
};
</script>

<template>
    <button type="button" class="flex justify-cneter item-center  rounded-md px-4 py-1 text-white font-bold" :class="color">
        {{ icon }}
        {{ content }}
    </button>
</template>