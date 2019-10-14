<template>
    <nav>
        <router-link to="/" class="link-home">Stock Trader</router-link>
        <div class="nav-content">
            <ul class="nav-links">
                <router-link to="/portfolio" tag="li"><a>Portfolio</a></router-link>
                <router-link to="/stocks" tag="li"><a>Stocks</a></router-link>
            </ul>
            <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
            <ul class="nav-right">
                <li><a href="#" @click="endDay">End day</a></li>
                <li class="dropdown" :class="{open: isDropdownOpen}">
                    <a 
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >Save & Load <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#" @click="saveData">Save Data</a></li>
                        <li><a href="#">Load Data</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data(){
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions([
                'randomizeStocks'
            ]),
            endDay(){
                this.randomizeStocks();
            },
            saveData(){
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data);
            }
        }
    }
</script>

<style scoped>
    .open {
        display: block;
    }
    nav {
        outline: 1px solid black;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        width: 80%;
        margin: 0 auto;
    }
    .nav-links,.nav-right {
        margin: 0;
    }
    a {
        text-decoration: none;
        height: 50px;
        display: block;
        color: black;
        transition: 500ms;
    }
    a:hover {
        background-color: #ffcccc;
    }
    .link-home,li {
        line-height: 50px;
        box-sizing: content-box;
        text-decoration: none;
        color: black;
        min-width: 100px;
        text-align: center;
        transition: 500ms;
    }
    .link-home:hover {
        background-color: gray;
    }
    .nav-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    ul.nav-right,ul.nav-links {
        min-width: 120px;
        display: flex;
        justify-content: flex-start;
        padding: 0;
    }
    li {
        list-style-type: none;
        height: 50px;
        line-height: 50px;
    }
    .dropdown {
        position: relative;
    }
    .dropdown a {
        padding: 0 8px 0 8px;
    }
    .dropdown-menu {
        display: none;
        position: absolute;
        top: -5px;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
        margin: 0;
    }
    .dropdown:hover .dropdown-menu {
        display: block;
    }
</style>