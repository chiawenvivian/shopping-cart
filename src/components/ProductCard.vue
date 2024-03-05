<!-- 統一做一個商品卡組件 -->
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
    <div class="w-1/2 xl:w-1/6 border-[1px] rounded-lg flex flex-col md:w-1/3">
  <img class="rounded-t-lg w-full" src="https://dummyimage.com/300x300" alt="商品圖片">
<div class="bg-gray-300 h-[250px] bg-opacity-30 pl-3 flex flex-col gap-3 pt-3">
    <h2>{{ productName }}</h2>
    <p>{{ content }}</p>
    <p>價格: {{ price}}</p>
</div>
<div class="flex items-center gap-5 mb-5 px-3">
    數量：
    <div class="flex grow">
    <button type="button" class="count-btn rounded-l-full">
      -
    </button>
    <label class="border border-gray-400 border-x-0 border-y-1 grow h-[35px] flex justify-center items-center text-xl text-center">
      <input type="number" min="1" value="1" class="h-[30px] w-[80px] border-0 p-0 text-center text-black">
    </label>
    <button type="button" class="count-btn rounded-r-full">
      +
    </button>
  </div>
</div>
<button type="button" class="lex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-b-lg px-4 py-1">🛒加入購物車</button>
</div>
</template>

<style scoped>

</style>
