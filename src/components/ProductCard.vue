<script>
import { mapActions } from 'pinia';
import { useShoppingCart } from '@/stores/shoppingCart';
import iconShoppingCart from '@/assets/images/icon-shopping-cart.svg';
import CountButton from '@/components/CountButton.vue';

export default {
  components: {
    CountButton,
  },

  props: {
    // 直接將商品的物件丟進來
    product: {
      type: Object,
      default:'',
    },
  },
  data(){
    return{
      imgIcon: {
        iconShoppingCart,
      },
    };
  },
  methods: {
    ...mapActions(useShoppingCart, ['addCart','existProduct']),
},
}
</script>

<template>
    <div class="w-1/2 xl:w-1/6 border-[1px] rounded-lg flex flex-col md:w-1/3">
  <img class="rounded-t-lg w-full" :src="product.pic" alt="商品圖片">

<div class="bg-gray-300 h-[250px] bg-opacity-30 pl-3 flex flex-col gap-3 pt-3">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>價格: {{ product.price}}</p>
</div>
<div class="flex items-center gap-5 mb-5 px-3">
  <!-- 挖一洞給父層看要放什麼 -->
  <slot/>
</div>
<button type="button" class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-b-lg px-4 py-1" @click="addCart(product)">
      <img :src="imgIcon.iconShoppingCart" alt="購物車圖示" width="20">
      <span> {{ existProduct(product) ? '已經加入購物車' :'加入購物車' }} </span>
    </button>
</div>
</template>

<style scoped>

</style>
