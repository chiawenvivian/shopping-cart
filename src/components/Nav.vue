<script>
import { mapState } from 'pinia';
import { useShoppingCart } from '@/stores/shoppingCart';
import iconShoppingCart from '@/assets/images/icon-shopping-cart.svg';

export default {
  props: {
  },
  data(){
    return{
      iconShoppingCart,
    };
  },
  computed:{
    ...mapState(useShoppingCart,['cartData']),
  },
  methods: {

  },
}
</script>

<template>
  <div class="w-full items-center px-1 bg-black text-yellow-200 fixed top-0 flex justify-between h-[40px]">
    <RouterLink to="/"><span class="text-yellow">shopping</span></RouterLink>

    <RouterLink to="/shoppingcart"><button type="button" class="w-[30px] h-[30px] flex justify-center items-center rounded-2xl">
      <img class="w-[30px]" :src="iconShoppingCart" alt="購物車圖示" />
    </button></RouterLink>
    <div class="absolute top-0 z-10 right-[17px] w-[16px] h-[16px] flex justify-center items-center rounded-full bg-red-600">{{ cartData.length }}</div>
    <!-- 購物車的數字會等於商品陣列的長度 -->
</div>
</template>

<style scoped>

</style>
