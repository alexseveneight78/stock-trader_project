<template>
    <div>
        <div class="boxes">
            <div class="panel">
                <div class="heading">
                    <h3>
                        {{ stock.name }}
                        <span>(Price: {{ stock.price }})</span>
                        </h3>
                </div>
                <div class="content">
                    <input 
                        type="number" 
                        placholder="Quantity"
                        v-model="quantity"
                        :class="{ danger: insufficientFunds}"
                        >
                </div>
                <button 
                    @click="buyStock"
                    :disabled=" insufficientFunds || quantity <= 0"
                    >{{ insufficientFunds ? 'InsufficientFunds' : 'Buy' }}
                    </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data(){
        return {
            quantity: 0
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds;
        },
        insufficientFunds(){
            return this.quantity * this.stock.price > this.funds;
        }
    },
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            this.$store.dispatch('buyStock', order)
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .danger {
        background-color: red;
        transition: 500ms;
    }
</style>