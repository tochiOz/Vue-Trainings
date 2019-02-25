<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-2 mt-5">
        <h1>Animation</h1>
        <hr>
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <button class="btn btn-danger mb-2" @click.prevent=" show = !show ">Show Alert</button>
        <br>
        
        <transition 
          appear
          enter-active-class="bounce animated"
          leave-class-active="flash animated"
        >
          <div class="alert alert-success" v-if="show">
            <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
          </div>
        </transition>
        <transition 
          appear
          enter-active-class="pulse animated"
          leave-class-active="rubberBand animated"
        >
          <div class="alert alert-info" v-if="show">
            <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
          </div>
        </transition>
        <transition 
          appear
          enter-active-class="shake animated"
          leave-class-active="headShake animated"
        >
          <div class="alert alert-danger" v-if="show">
            <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
          </div>
        </transition>
        <transition 
          appear
          enter-active-class="swing animated"
          leave-class-active="wobble animated"
        >
          <div class="alert alert-warning" v-if="show">
            <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
          </div>
        </transition>
        <transition 
          appear
          enter-active-class="jello animated"
          leave-class-active="bounceIn animated"
        >
          <div class="alert alert-primary" v-if="show">
            <h4 class="text-center"><em>! This is a transitionn alert only</em></h4>
          </div>
        </transition>

        <transition :name="alertAnimation" > <!-- appear helps the animation reload immediately the page loads -->
          <div class="alert alert-secondary" v-if="show">
            <h4 class="text-center"><em>! This is a transition and animation alert</em></h4>
          </div>
        </transition>
        <transition :name="alertAnimation"  > <!-- appear helps the animation reload immediately the page loads -->
          <div class="alert alert-light" v-show="show">
            <h4 class="text-center"><em>! This is a transition and animation alert</em></h4>
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
      show: true,
      alertAnimation: 'slide'
    }
  }
}
</script>

<style scoped>
  .btn {
    border: none;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
  }

  /* .fade.leave {

  } */

  .fade-leave-active {
    transition: opacity 2s;
    opacity: 0.5;
  }
/* animations in vue are quite different cos they dont need enter or leave css classes*/
  .slide-enter-active {
    animation: slide-in 1s ease-in-out forwards;
    opacity: 0.5;
  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
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
