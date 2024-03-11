// 設定pinia，要共同管理的資料
import { defineStore } from 'pinia';

export const useShoppingCart = defineStore ('shopingcart', {
    // 公用變數
    state: () => {
        return{
            // 放進購物車的商品，會有很多資訊用陣列包起來
            cartData: [],
            // 打勾確定要買的品項，要另外設一個變數
            checkedData:[],
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
        // 商品加入購物車
        addCart(product){
        const existProduct = this.existProduct(product);
        // 如果已存在商品則修改數量，沒有則新增
        if (existProduct) {
        existProduct.quantity = product.quantity;
        } else {
        this.cartData.push(product);
        }
        // 把資料放進去localstorage
        const datainfo = JSON.stringify(this.cartData);
        localStorage.setItem('datainfo', datainfo);
        },
        /**
     * 找出cartData內已存在的產品
     * @param {object} product 產品資料
     * @returns 回傳cartData內已存在的產品資料
     */
    existProduct(product) {
        return this.cartData.find(item => item.id === product.id);
      },

      addCheckedData(product){
        if (product.checked){
            this.checkedData.push(product);
        } else{
            this.checkedData = this.checkedData.filter(item => item.id !== product.id);
        }
        },

        // 計算數量跟總金額
        countTotal(){
            let count = 0;
            let price = 0;
            this.checkedData.forEach(item =>{
                count += item.quantity;
                price += (item.quantity * item.price);
            });
            // 回傳一個物件裡面包含兩個key
            return { count: count, price: price };
        },
        
        resetCartData() {
            this.cartData = [];
            const datainfo = JSON.stringify(this.cartData);
            localStorage.setItem('datainfo', datainfo);
        },
      },
    },
);