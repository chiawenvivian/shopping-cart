<!-- 統一做一個商品列表組件 -->
<script>
export default {
  props: {
    productName:{
      type: String,
      defaul:'',
    },
    content:{
      type: String,
      defaul:'',
    },
    price:{
      type: Number,
      defaul:'',
    },
  },
  data(){
    return{

    };
  },
  methods: {
  },
}
</script>

<template>
  <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                
            </div>
            <div class="flex justify-center">
                <img src="https://dummyimage.com/100x100" alt="商品圖示" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
                {{ productName }}
            </div>
            <div class="flex items-center">
                {{ content }}
            </div>
            <div class="gird-td flex justify-center items-center"> {{price}}</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <label>
                  <button type="">✚</button>
                    <input type="number" value="1" class="text-black
                    text-center w-[40px]">
                    <button type="">−</button>
                </label>
                <button type="button" class="lex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-b-lg px-4 py-1">🛒加入購物車</button>
            </div>
        </div>
</template>

<style scoped>

</style>
