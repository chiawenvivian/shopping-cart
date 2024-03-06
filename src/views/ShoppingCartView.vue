<script>
import ProductCard from '@/components/ProductCard.vue';
import Nav from '@/components/Nav.vue';
import PublicBtn from '@/components/PublicBtn.vue';

export default {
    components:{
        ProductCard,
        Nav,
        PublicBtn,
    },

    data() {
        return {

        };
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
        <h1 class="mb-3 text-3xl font-bold text-white">購物車確認</h1>
    </div>
    <div class="mb-6 px-5">
        <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                <input type="checkbox" class="w-5">
            </div>
            <div class="flex justify-center">
                <img src="https://dummyimage.com/100x100" alt="商品圖示" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
                Alphazap
            </div>
            <div class="gird-td flex justify-center items-center"> $776</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <label>
                    <input type="number" value="1" class="text-black
                    text-center">
                </label>
            </div>
        </div>
        <div class="grid-tr grid-cols-6 grid py-1 border-b border-main-deep min-h-[80px] gap-x-3 md:gap-x-1 lg:first:border-t lg:!py-3">
            <div class="flex justify-center">
                <input type="checkbox" class="w-5">
            </div>
            <div class="flex justify-center">
                <img src="https://dummyimage.com/100x100" alt="商品圖示" class="w-[100px] h-full object-cover">
            </div>
            <div class="flex items-center">
                Bytecard
            </div>
            <div class="gird-td flex justify-center items-center"> $954</div>
            <div class="gird-td flex justify-center items-center lg:flex-wrap lg:!justify-between lg:pt-6 md:!pt-0">
                <label>
                    <input type="number" value="1" class="text-black
                    text-center">
                </label>
            </div>
        </div>
    </div>
    
    </div>
    <div class="flex justify-between gap-4">
        <RouterLink to="/"><PublicBtn content="回上頁繼續購買" color="bg-blue-500"/></RouterLink>
        <RouterLink to="/order"><PublicBtn content="確認購買" color="bg-green-500"/></RouterLink>
    </div>

    </main>
</template>

<style scoped></style>