<script>
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
        <h1 class="mb-3 text-3xl font-bold text-white">購買確認及填寫資訊</h1>
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
    <div class="mb-6 px-5">
        <PublicLabel2 content="姓名" required>
            <input type="text" class="border border-white text-black">
        </PublicLabel2>    
    </div>
    <div class="mb-6 px-5">
        <PublicLabel2 content="電話" required>
            <input type="text" class="border border-white text-black">
        </PublicLabel2>
    </div>
    <div class="mb-6 px-5">
        <PublicLabel2 content="地址" required>
            <input type="text" class="border border-white text-black">
        </PublicLabel2>
    </div>
    <div class="mb-6 px-5">
        <PublicLabel2 content="信箱" required>
            <input type="text" class="border border-white text-black">
        </PublicLabel2>
    </div>
    <div class="mb-6 px-5">
        <label for="paymentMethod" class="block mb-2 text-lg font-bold">付款方式</label>
        <div class="flex gap-5">
            <div class="flex items-center">
                <input type="radio" name="paymentMethod" id="paymentMethod1" class="mr-2" required="" value="信用卡"><label for="paymentMethod1">信用卡</label>
            </div>
            <div class="flex items-center">
                <input type="radio" name="paymentMethod" id="paymentMethod2" class="mr-2" required="" value="貨到付款"><label for="paymentMethod2">貨到付款</label>
            </div>
        </div>
    </div>
    <div class="mb-6 px-5">
        <label for="shippingMethod" class="block mb-2 text-lg font-bold">運送方式</label>
        <div class="flex gap-5">
            <div class="flex items-center">
                <input type="radio" name="shippingMethod" id="shippingMethod1" class="mr-2" required="" value="宅配">
                <label for="shippingMethod1">宅配</label>
            </div>
            <div class="flex items-center">
                <input type="radio" name="shippingMethod" id="shippingMethod2" class="mr-2" required="" value="超商取貨">
                <label for="shippingMethod2">超商取貨</label>
            </div>
        </div>
    </div>
    <h2 class="text-2xl font-bold w-full text-end">商品數量: 1</h2>
    <h2 class="text-2xl font-bold w-full text-end">商品金額: $954</h2>
    <div class="flex justify-between gap-4">
        <RouterLink to="/shoppingcart">
            <PublicBtn content="回上頁繼續購買" color="bg-blue-500"/>
        </RouterLink>
        <RouterLink to="/checkinfo">
            <PublicBtn content="確認送出" color="bg-green-500"/>
        </RouterLink>
    </div>
    </div>
    </main>
</template>

<style scoped></style>