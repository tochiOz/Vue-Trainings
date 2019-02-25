<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-10col-md-2 mt-5">
                <h1>Group Animations Using Transistion Group</h1>
                <hr>
                <br>
                <button class="btn btn-primary btn-lg mb-2" @click=" addItem"> Add Item </button>
                <br><br>
                <transition-group name="slide" class="list-group">
                
                        <li class="list-group-item"
                            v-for="(item, i) in numbers"
                            :key="item"
                            @click.prevent="removeItem(i)"
                            style="cursor: pointer;"
                        >{{ item }}</li>    
                    
                </transition-group>
                               
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            numbers: [1, 2, 3, 4, 5]
        }
    },

    methods: {
        addItem() {
            let itemPosition = Math.floor(Math.random() * this.numbers.length)
            return this.numbers.splice(itemPosition, 0, this.numbers.length + 1)
        },

        removeItem(i) {
            return this.numbers.splice(i, 1)
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
    position: absolute;
  }
/* the slide-move option helps animation move swiftly, it aids when the index of an item in the array is to be replaced by another item */
  .slide-move {
      transition: transform 1s;
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