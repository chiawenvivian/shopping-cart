<script>
import { mapState, mapActions} from 'pinia';
import { useShoppingCart } from '@/stores/shoppingCart';
import ProductCard from '@/components/ProductCard.vue';
import ProductList from '@/components/ProductList.vue';
import Nav from '@/components/Nav.vue';
import PublicBtn from '@/components/PublicBtn.vue';
import CountButton from '@/components/CountButton.vue';

export default {
    components:{
        ProductCard,
        ProductList,
        Nav,
        PublicBtn,
        CountButton,
    },

    data() {
        return {

        };
    },
    computed: {
    ...mapState(useShoppingCart, ['cartData']),

    // 新的陣列需要產生有check的cartdata
    // 這邊被污染了！！！！
    newCartData(){
        // 不要改動原本的資料，要長出一個新的陣列(不要修改到原始資料！)
        const arr = this.cartData.map(product => {
            product.checked = false;
            return product;
        });
        return arr;
    },
    },

    methods: {
        ...mapActions(useShoppingCart, ['addCheckedData', 'countTotal']),

        submitCart(){
            this.$router.push('/order');
        },
        
        changeChecked(product){
            product.checked = !product.checked;
            this.addCheckedData(product);
        },
    },
};
</script>

<template>
    <header>
        <Nav/>
    </header>
    <main class="w-full pt-[50px] font-big">
        <div class="w-full px-5">
    <div>
        <h1 class="mb-3 text-3xl font-bold text-white">購物車確認</h1>
    </div>
    <div class="mb-6 px-5">
        <div class="grid grid-cols-6 border-y font-bold py-1 gap-x-3">
        <div></div>
        <div class="text-center">商品圖片</div>
        <div>商品名稱</div>
        <div class="text-center">價錢</div>
        <div>操作</div>
      </div>
        <div v-for="product in newCartData" :key="product.id" class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                <input type="checkbox" class="w-5" @change="changeChecked(product)">
            </div>
            <div class="flex justify-center">
                <img :src="product.pic" alt="商品圖示" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
               {{ product.name }}
            </div>
            <div class="gird-td flex justify-center items-center"> {{ product.price }}</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <label>
                    <CountButton :quantity="product.quantity" class="text-black mt-2 ml-2 w-[100px] h-[35px]" @update="(newValue) => product.quantity = newValue"/>
                </label>
            </div>
        </div>
        
    </div>
    
    <div class="flex justify-end flex-wrap mb-2">
      <p class="text-2xl text-end font-bold w-full">商品數量: {{ countTotal().count }}</p>
      <p class="text-2xl text-end font-bold w-full">商品總金額: $ {{ countTotal().price }}</p>
    </div>

    </div>
    <div class="flex justify-between gap-4">
        <RouterLink to="/">
            <PublicBtn content="回上頁繼續購買" color="bg-blue-500"/>
        </RouterLink>
        <PublicBtn content="確認購買" color="bg-green-500" @click="submitCart()"/>
    </div>
    </main>
</template>

<style scoped></style>