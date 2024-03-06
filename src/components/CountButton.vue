<script>
export default {
  props:{
    quantity:{
      type: Number,
      default: 1,
    },
  },
  // 要跟父層通知有更新，所以設一個往上傳的訊號
  emits:['update'],
  data() {
    return {

    };
  },
  methods: {
    // 加
    add(){
      const plusQuantity = this.quantity + 1;
      this.$emit('update', plusQuantity);
    },

    // 減
    reduce(){
      // 以防被減成負數，故要大於1才進行減少
      if(this.quantity > 1){
      const minusQuantity = this.quantity - 1;
      this.$emit('update', minusQuantity);
      }
    },
  },
};
</script>

<template>
  <div class="flex grow">
    <button type="button" class="count-btn rounded-l-full text-white" @click="reduce">
      -
    </button>
    <label class="border border-gray-400 border-x-0 border-y-1 grow h-[35px] flex justify-center items-center text-xl">
      <!-- 使用 @input 直接發送emit給父層 -->
      <input type="number" min="1" class="h-[30px] w-[40px] border-0 p-0 text-center remove-arrow" :value="quantity" @input="(e) => $emit('update', Number(e.target.value))">
      <!-- 強制將取到的值改成數字，以利後續計算使用 -->
    </label>
    <button type="button" class="count-btn rounded-r-full text-white" @click="add">
      +
    </button>
  </div>
</template>

<style scoped>
.count-btn {
  @apply w-[30px] h-[35px] border border-gray-400 text-xl cursor-pointer;
}
/* 移除input數字鍵的小箭頭 */
.remove-arrow::-webkit-inner-spin-button, 
        .remove-arrow::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
            margin: 0; 
        } 
  
        .remove-arrow { 
            -moz-appearance: textfield; 
        } 
</style>
