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
                        >
                </div>
                <button 
                    @click="buyStock"
                    :disabled="quantity <= 0"
                    >Buy</button>
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
    methods: {
        buyStock(){
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
        }
    },
    created(){
        console.log(this.stock.id)
    }
}
</script>

<style scoped>

</style>