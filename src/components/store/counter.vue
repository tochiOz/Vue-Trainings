<template>
    <div>
        <button class="btn btn-success btn-lg m-2" @click="increment(100)">Increment</button>
        <button class="btn btn-danger btn-lg m-2" @click="decrement(50)">Decrement</button>
    </div>
</template>

<script>

import { mapActions } from "vuex";
    export default {
        
        methods: {
            ...mapActions([
                'increment',
                'decrement'
            ]),

            // increment() {
            // this.$store.dispatch('increment')
            // },
            
            // decrement() {
            //     this.$store.dispatch('decrement')
            // }
        }
    }
</script>