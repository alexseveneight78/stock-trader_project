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

    }
}
</script>

<style scoped>

</style>