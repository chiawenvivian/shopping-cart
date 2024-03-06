<script>
import { mapActions } from 'pinia';
import { useShoppingCart } from '@/stores/shoppingCart';
import ProductCard from '@/components/ProductCard.vue';
import CountButton from '@/components/CountButton.vue';
import ProductList from '@/components/ProductList.vue';
import Nav from '@/components/Nav.vue';
import MOCK_DATA from '@/assets/MOCK_DATA.json';


export default {
    components:{
        ProductCard,
        CountButton,
        ProductList,
        Nav,
        MOCK_DATA,
    },

    data() {
        return {
            arr:[],
            layout:'grid',
            // productData: [],
        };
    },
    mounted () {
        this.arr = MOCK_DATA;
        // this.fetchData();
    },
    methods: {
        // 拿資料的fn
        // fetchData(){
        //     fetch('./assets/MOCK_DATA.json')
        //     .then(res => res.json())
        //     .then(res => this.productData = res);
        // },
        ...mapActions(useShoppingCart, ['addCart']),
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
        <h1 class="mb-3 text-3xl font-bold text-white">商品列表</h1>
        <div class="flex justify-end items-center">
            <button type="button" @click="layout='grid'">
                <img class="mr-1" src="/src/assets/images/icon-mesh.png" alt="卡片顯示" v-if="layout=='grid'">
                <img class="mr-1" src="/src/assets/images/icon-mesh-grey.png" alt="卡片顯示" v-if="layout=='list'">
            </button>
            <button type="button" @click="layout='list'">
                <img class="mr-1" src="/src/assets/images/icon-list.png" alt="條列顯示" v-if="layout=='list'">
                <img class="mr-1" src="/src/assets/images/icon-list-grey.png" alt="條列顯示" v-if="layout=='grid'">
            </button>
        </div>
    </div>
    <!-- 商品列表呈現 -->
    <div><div class="mb-6 px-5" v-if="layout=='list'">
      <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                
            </div>
            <div class="flex justify-center items-center text-center text-white font-bold">
              商品圖片
            </div>
            <div class="flex items-center text-center text-white font-bold">
                商品名稱
            </div>
            <div class="flex items-center text-center text-white font-bold">
                商品描述
            </div>
            <div class="gird-td flex justify-center items-center text-center text-white font-bold"> 價錢</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <div class="flex justify-center items-center text-center text-white font-bold"></div>
            </div>
        </div>
    <productList v-for="product in arr" :key="product.id" :product="product">
        <div class="flex justify-center items-center">
        <span class="text-md mt-3">數量：</span>
        <CountButton :quantity="product.quantity" class="text-black mt-2 ml-2 w-[100px] h-[35px]" @update="(newValue) => product.quantity = newValue"/>
    </div>
    </ProductList>
</div>
    
        
<!-- 商品卡呈現 -->
<div class="w-full h-screen flex justify-center mt-3" v-if="layout=='grid'">
<div class="w-11/12 h-4/6 flex gap-5 flex-wrap justify-center">
<!-- 叫出商品卡 -->
<!-- 因為組件禮物件叫做product故這裡也要用同樣名稱不然找不到 -->
<ProductCard v-for="product in arr" :key="product.id" :product="product">
    <div class="flex justify-center items-center">
        <span class="text-md mt-3">數量：</span>
        <CountButton :quantity="product.quantity" class="text-black mt-2 ml-2 w-[100px] h-[35px]" @update="(newValue) => product.quantity = newValue"/>
            <!-- 在父層先通過訊號說 要得到新的值，並且將產品新的值改成帶進來的新值 -->
    </div>
</ProductCard>

</div>
</div>
</div>
</div>

</main>
</template>

<style scoped></style>