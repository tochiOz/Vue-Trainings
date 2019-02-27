<template>
    <div>
        <h3>Counter is: {{ counter }}</h3>
        <h4>Clicks is: {{ doubleCouter }}</h4>
    </div>
</template>

<script>
//using mapGetters helps to the component use as many getters available in the store

import { mapGetters } from "vuex";
    export default {
        computed: mapGetters([
            'counter',
            'doubleCouter'
        ])
    }
</script>