<script>
import ProductCard from '@/components/ProductCard.vue';
import ProductList from '@/components/ProductList.vue';
import Nav from '@/components/Nav.vue';
import MOCK_DATA from '@/assets/MOCK_DATA.json';

export default {
    components:{
        ProductCard,
        ProductList,
        Nav,
        MOCK_DATA,
    },

    data() {
        return {
            arr:[],
            layout:'grid',
        };
    },
    mounted () {
        this.arr = MOCK_DATA;
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
        <h1 class="mb-3 text-3xl font-bold text-white">商品列表</h1>
        <div class="flex justify-end items-center">
            <button type="button" @click="layout=='grid'">
                <img class="mr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAABHNCSVQICAgIfAhkiAAAAnBJREFUaENjZBimgBGPv/DJDabg+I/NMeiOh/FBNAwPJk+guwXkKRgGycE9iewxsEe6nGqT/jMzyv3//5/xP8P/QR1r///8fVx1oH0B0N1/gfgfsieRHc4E8pSKtVazmIq4xGCOJpjbXt158fLywYvN9Yc65wHFfkM9B/IgOLnBaKZO17p6m1jHWssY+6HgL4bjSw4y7Jm/vbt+f1cL0ME/gfgPLOZQPNbhUttgG+dUM5Q8tmvu1r7Ggz2tQA99B+Jf2DzG3O5S02AX51w9lDy2Y87mCc2H+mAeA8UaKL/BCwdQzA1lj7UB3f8NmhyJ99j+6TsY3tx/RTDf2ae7MYgpSzCsLltEUC1IQWhXHMOruy8YDs7cRVC9iKIYg2OmB4o6UB6Dxhh5HltVupDhyeWHBC0P64pnkNGTZ+jzaCKoFqSgaEcdw5NLDxlWlS0kqF5GV54hrDt+1GPIpSLOPDYaY6NJEZJVRvMYMBBGCw9SKmhQPfb63kuCRbJDhju4HgMVNsQAUPENqscOzNhJULmokjj16zGCtg6QAoor6NGWx2hxP1rcw3PvaHFPSnE/2lYcLTwGSeEx2vKgcwuE4pYHnd1LtHWjHhuu44pMzfaVSdp2ek2iSmJDYuz++a1nT88dOtnbcXQKqJ+EcySYCSjJ0uRQlggcRpX79+8vM3BOhhE060J0oqejQkZGxv+///x61n508lKgtaARYKxj9yAngTwGwqxQzALl09G5JFsFmlkBTUSAZlqwzraATIRN9IE8xwz11GCe/INN+IE8h3d+DOY5ZE8OymSIFK9EzWiip4PB7imYe4magyY5kQ9WDQCoJwFViP0K2wAAAABJRU5ErkJggg==" alt="卡片顯示">
            </button>
            <button type="button" @click="layout=='list'">
                <img class="mr-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAABHNCSVQICAgIfAhkiAAAAoJJREFUaENjZBimgBGPv/DJDabg+I/NMeiOh/FBNAwPJk+guwXkKRgGycE9iewxsEe6nGqT/jMzyv3//5/xP8P/QR1r///8fVx1oH0B0N1/gfgfsieRHc4E8pSKtVazmIq4xGCOJpjbXt158fLywYvN9Yc65wHFfkM9B/IgOLnBaKZO17p6m1jHWssY+6HgL4bjSw4y7Jm/vbt+f1cL0ME/gfgPLOZQPNbhUttgG+dUM5Q8tmvu1r7Ggz2tQA99B+Jf2DzG3O5S02AX51w9lDy2Y87mCc2H+mAeA8UaKL/BCwdQzA1lj7UB3f8NmhyJ99j+6TsY3tx/Bc93oV1xcParuy8YDs7cRfM8KaIoxuCY6YFiDyiPQWOMPI+tKl3I8OTyQ7ihRTvq4Ownlx4yrCpbSHOPyejKM4R1x496DLlUxJnHhm2M0TydkWkBxXmMTHtprm3UY7gqaFCR/usrqO6DABk9eTj755cfDK/vvaR57LBxszOIKaM2YSmOsWFbeIx6jIYJkiYV9LDNYzSMCIqMprjwoMh2Gmoe9Riuemy0VKRhsqNJqThsYwzUg0ZuNiF3+EBVwYEZO2kYVxCjRZXEqd+DprmrybRgtFQcwsNv5A3mkJlSaK4NKSniHVdkaravTNK202sSVRIbEmP3z289e3ru0MnejqNTQMNkOEeCmYCSLE0OZYnAYVS5f//+MgPnZBhBsy40D3oyLGBkZPz/+8+vZ+1HJy8Fagf1grGO3YOMBnkMhFmhmAXKJ8NaumkBzayAJiJAMy1YZ1tALoFN9IE8xwz11GCe/INN+IE8h3d+DOY5ZE8OymSIlB6ImtFETz+D3VMw9xI1B023zEFriwBzMo9G/HjHngAAAABJRU5ErkJggg==" alt="條列顯示">
            </button>
        </div>
    </div>
    <div><div class="mb-6 px-5">
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
    <productList v-for="card in arr" :key="card.id" :productName="card.name" :content="card.description" :price="card.price"/></div>
    
        

<div class="w-full h-screen flex justify-center items-center">
<div class="w-11/12 h-4/6 flex gap-5 flex-wrap justify-center">
<!-- 叫出商品卡 -->
<ProductCard v-for="card in arr" :key="card.id" :productName="card.name" :content="card.description" :price="card.price"/>
</div>
</div>
</div>
</div>

</main>
</template>

<style scoped></style>