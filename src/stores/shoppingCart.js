// 設定pinia，要共同管理的資料
import { defineStore } from 'pinia';

export const useShoppingCart = defineStore ('shopingcart', {
    // 公用變數
    state: () => {
        return{
            // 放進購物車的商品，會有很多資訊用陣列包起來
            cartData: [],
            // 有明確的資料分類就用物件
            buyerData: {
                name:'',
                phone:'',
                address:'',
                email:'',
                // 此處用代號，效能會比較好(資料比較小)；或是修改資料時好維護
                payment:'',
                delivery:'',
            },
        };
    },
    // 共用函示
    actions: {

    },
});