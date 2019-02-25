<template>
    <div>
        <ol>
            <li  v-for="text in texts" :key="text">{{ text | toUpperCase | lowerCase }}</li>
        </ol>
        <hr>
        <input type="text" class="form-control" v-model="filterName" >
        <input type="button" class="btn btn-danger mt-3" value="Add" @click.prevent="addName">
        <ul>
            <li 
                v-for="(name, i) in filteredName" 
                :key="name"
                @click.prevent="inputName(i)">
                    {{ name }}
            </li>
        </ul> 
    </div>
</template>


<script>

import { namesMixin } from '@/components/mixin/appMixin.js'
// @ is an alias to /src
//when anything is declared globally in main.js there is no need to impport the file
//the march() method helps to find if strings compare have similar data properties
export default {
  name: 'home',

  data () {
    return {
      texts: ['HELLO Filters']
    }
  },

   mixins: [namesMixin],

  //you can register your filters locally by calling it within the page
  filters: {
    //call the filter function which will be passed inside the interpolation
    toUpperCase(value) {//a value must be passed to specify which data is to be filtered
      return value.toUpperCase();
    }
  },
  //this is an alternative method for using filters using the computed property
  methods: {
      inputName (i) {
      if(this.filteredName[i] !== null){
        this.filterName = this.filteredName[i]
      }
      //return this.filterName = index
    },

    addName () {
      this.texts.push(this.filterName)
      return this.filterName = ''
    }
  }
  
}
</script>
