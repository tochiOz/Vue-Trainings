<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-2 mt-5">
                <!-- This second div shows that we can use multiple lines of content in our transition each having a key and a mode 
                    ou-in/in-out each explaining themselves respectively, each enabling the transition on them -->

                <h1>Animating Multiple Lines In Same Transistion Tag</h1>
                <hr>
        
                <br>
                <button class="btn btn-primary mb-2" @click.prevent=" display = !display ">Exchange Alert</button>
                <br>
                
                <transition 
                    appear
                    enter-active-class="bounce animated"
                    leave-class-active="flash animated"
                    mode="out-in"
                    >
                    <div class="alert alert-success" key="success" v-if="display">
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                    <div class="alert alert-warning" key="warning" v-else>
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                </transition>
                <br>
                <transition 
                    appear
                    enter-active-class="jello animated"
                    leave-class-active="bounceIn animated"
                    mode="out-in"
                    >
                    <div class="alert alert-primary" key="primary" v-if="display">
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                    <div class="alert alert-dark" key="dark" v-else>
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                </transition>
                <br>
                <transition 
                    appear
                    enter-active-class="shake animated"
                    leave-class-active="wobble animated"
                    mode="out-in"
                    >
                    <div class="alert alert-warning" key="primary" v-if="display">
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                    <div class="alert alert-success" key="dark" v-else>
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                </transition>
                <br>
                <transition 
                    appear
                    enter-active-class="swing animated"
                    leave-class-active="headShake animated"
                    mode="out-in"
                    >
                    <div class="alert alert-danger" key="primary" v-if="display">
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                    <div class="alert alert-secondary" key="dark" v-else>
                        <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            display: true
        }
    }
}
</script>
