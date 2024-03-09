<script>
import { mapState } from 'pinia';
import { useShoppingCart } from '@/stores/shoppingCart';
import ProductCard from '@/components/ProductCard.vue';
import Nav from '@/components/Nav.vue';
import PublicBtn from '@/components/PublicBtn.vue';
import PublicLabel2 from '@/components/PublicLabel2.vue';
export default {
    components:{
        ProductCard,
        Nav,
        PublicBtn,
        PublicLabel2,
    },

    data() {
        return {

        };
    },
    
    computed:{
        ...mapState(useShoppingCart,['checkedData','buyerData'])
    },

    methods: {
        
    },
}
</script>

<template>
    <header>
        <Nav/>
    </header>
    <main class="w-full pt-[50px] font-big">
        <div class="w-full px-5">
    <div>
        <h1 class="mb-3 text-3xl font-bold text-white">完成購買</h1>
    </div>
    <div class="mb-6 px-5">
      <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                
            </div>
            <div class="flex justify-center items-center text-center text-white font-bold">
              商品圖片
            </div>
            <div class="flex items-center text-center text-white font-bold">
                商品名稱
            </div>
            <div class="gird-td flex justify-center items-center text-center text-white font-bold"> 價錢</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <div class="flex justify-center items-center text-center text-white font-bold">數量</div>
            </div>
        </div>
        <div v-for="product in checkedData" :key="product.id" class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                
            </div>
            <div class="flex justify-center">
                <img :src="product.pic" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
             {{ product.name }}
            </div>
            <div class="gird-td flex justify-center items-center"> 
                {{ product.price }}
            </div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <p class="flex justify-center items-center">
                    {{ product.quantity }}
                </p>
            </div>
        </div>
       
    </div>
  </div>
  <div class="mb-6 px-5">
    <div class="grid-cols-6 grid border-y border-main-deep text-main-deep font-bold py-1 gap-x-3">
      <div class="gird-th">姓名</div>
      <div class="gird-th">電話</div>
      <div class="gird-th">地址</div>
      <div class="gird-th">付款方式</div>
      <div class="gird-th">信箱</div>
      <div class="gird-th">運送方式</div>
    </div>
    <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
      <div class="flex items-center">{{ buyerData.name }}</div>
      <div class="flex items-center">{{ buyerData.phone }}</div>
      <div class="flex items-center">{{ buyerData.address }}</div>
      <div class="flex items-center">{{ buyerData.payment }}</div>
      <div class="flex items-center">{{ buyerData.email }}</div>
      <div class="flex items-center">{{ buyerData.delivery }}</div>
    </div>
  </div>
  <RouterLink to="/"><a href="#/shopping" class="flex justify-center items-center bg-[#50468c] text-white rounded-md px-4 py-1 cursor-pointer md:p-0"><span> 回首頁 </span></a></RouterLink>
    </main>
</template>

<style scoped></style>