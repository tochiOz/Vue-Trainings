<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10col-md-2 mt-5">
                <h1>Javascript Hooks Used For Css Animation</h1>
                <hr>
                <br>
                <button class="btn btn-success btn-lg mb-2" @click=" loading = !loading "> Load Task </button>
                <br><br>
                <!-- This area shows the major way to use Javascript Animated Hooks and how to use them to create animations -->
                <!-- the different js hooks will be passed as an attribute of transistion -->
                <transition
                    @before-enter = "beforeEnter" 
                    @enter = "enter" 
                    @after-enter = "afterEnter"
                    @enter-cancelled = "enterCancelled"
                    
                    @before-leave = "beforeLeave" 
                    @leave = "leave" 
                    @after-leave = "afterLeave"
                    @leave-cancelled = "leaveCancelled"
                    :css="false"
                    >
                    <div v-show="loading" style="width: 550px; height: 150px; background-color: lightgreen;"></div>
                </transition>
                <br><br>
                <button class="btn btn-lg btn-secondary mb-4"
                @click= "selectedComponent == 'app-success' ? selectedComponent = 'app-danger' : selectedComponent = 'app-success'"
                >Animated Componenet Switch, Click Me!!!</button>
                <br>
                <transition name="slide" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>

    import dangerAlert from '@/components/animatedCom/dangerAlert'
    import successAlrt from '@/components/animatedCom/successAlert'

export default {
   components: {
       appDanger: dangerAlert,
       appSuccess: successAlrt
   } ,

  data () {
    return {
      loading: true,
      displayWidth: 150,
      selectedComponent: 'app-success'
    }
  },

  methods: {

    beforeEnter (el) {
        console.log('beforeEnter')
        this.displayWidth = 350
        el.style.width = (this.displayWidth) + 'px'
    },

    enter (el, done) {
        console.log('enter');
        let count = 1
        const intervals = setInterval(() => {
            el.style.width = (this.displayWidth + (count * 10)) + 'px'
            count++
            if (count > 20) {
                clearInterval(intervals)
                done()
            }
        }, 20)
    },

    afterEnter (el) {
        console.log('afterEnter');
        
    },

    enterCancelled (el) {
        console.log('enterCancelled');
        
    },

    beforeLeave (el) {
        console.log('beforeLeave');
        this.displayWidth = 350
        el.style.width = (this.displayWidth) + 'px'
    },

    leave (el, done) {
        console.log('leave');
        let count = 1
        const intervals = setInterval(() => {
            el.style.width = (this.displayWidth - (count * 10)) + 'px'
            count++
            if (count > 20) {
                clearInterval(intervals)
                done()
            }
        }, 20)
    },

    afterLeave (el) {
        console.log('afterLeave');
        
    },

    leaveCancelled (el) {
        console.log('leaveCancelled');
        
    }

  }
}
</script>


<style scoped>
/* animations in vue are quite different cos they dont need enter or leave css classes*/
  .slide-enter-active {
    animation: slide-in 0.5s ease-in-out forwards;
    opacity: 0.5;
  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    opacity: 0;
  }

  @keyframes slide-in {
    from {
      transform: translateY(25px);
    }
    to {
      transform: translateY(0);
    }
  }
  
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(20px);
    }
  }
</style>