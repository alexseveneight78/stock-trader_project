<template>
    <div>
        <div class="boxes">
            <div class="panel">
                <div class="heading">
                    <h3>
                        {{ stock.name }}
                        <span>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</span>
                        </h3>
                </div>
                <div class="content">
                    <input 
                        type="number" 
                        placholder="Quantity"
                        v-model="quantity"
                        :class="{ danger: insufficientQuantity}"
                        >
                </div>
                <button 
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0"
                    >{{ insufficientQuantity ? 'Not enough Stocks' : 'Sell' }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        props: ['stock'],
        data(){
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity(){
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.stock.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>

</style>