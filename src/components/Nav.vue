<!-- 統一做一個nav組件 -->
<script>
export default {
  props: {
  },
  data(){
    return{

    };
  },
  methods: {

  },
}
</script>

<template>
  <div class="w-full items-center px-1 bg-black text-yellow-200 fixed top-0 flex justify-between h-[40px]">
    <RouterLink to="/"><span class="text-yellow">shopping</span></RouterLink>
    <RouterLink to="/shoppingcart"><button type="button" class="bg-gray-200 w-[30px] h-[30px] flex justify-center items-center rounded-2xl">🛒</button></RouterLink>
</div>
</template>

<style scoped>

</style>
