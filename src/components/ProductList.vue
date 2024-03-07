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
    product: {
      type:Object,
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
    ...mapActions(useShoppingCart, ['addCart', 'existProduct']),
  },
}
</script>

<template>
  <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                
            </div>
            <div class="flex justify-center">
                <img :src="product.pic" alt="商品圖示" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
                {{ product.name }}
            </div>
            <div class="flex items-center">
                {{ product.description }}
            </div>
            <div class="gird-td flex justify-center items-center"> {{product.price}}</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
              <slot/>

              <button type="button" class="flex justify-center items-center gap-x-2 bg-[#50468c] text-white rounded-lg ml-2 px-4 py-1" @click="addCart(product)">
              <img :src="imgIcon.iconShoppingCart" alt="購物車圖示" width="20">
              <span> {{ existProduct(product) ? '已經加入購物車' :'加入購物車' }} </span>
              </button>
            </div>
        </div>
</template>

<style scoped>

</style>
