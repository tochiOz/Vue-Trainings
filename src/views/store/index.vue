<template>
    <div class="container">
        <div class="row">
            <div class="mt-5 col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result ></app-result>
                <hr>
                <app-counter></app-counter>
                <hr><br><br>
                <input type="text" class="form-control" v-model="value" >
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from '@/components/store/counter.vue'
    import Result from '@/components/store/result.vue'

    export default {
    
        components: {
            appCounter: Counter,
            appResult: Result,
        },

        computed: {
            //computed properties also have getters and setters used to get values and set/change the state of a value
            value: {
                get() {
                    return this.$store.getters.value
                },
                set(value) {
                    return this.$store.dispatch('updateValue', value)
                    //the event.target.value specifies the exact data attached within a target where an event has occured
                }
            }
        },
 
        // methods: {
        //     updateValue(event) {
        //         return this.$store.dispatch('updateValue', event.target.value)
        //     }
        // }
    }
</script>
