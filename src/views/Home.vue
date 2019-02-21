<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="head my-20">
          <h1>Fliter</h1>
          <p>Vue.js allows you to define filters that can be used to apply common text formatting. Filters are usable in two places: mustache interpolations and v-bind expressions</p>
          <p>It transforms what the user sees.</p>
          <ol>
            <li  v-for="text in texts" :key="text">{{ text | toUpperCase | lowerCase }}</li>
          </ol>
          <hr>
          <input type="text" class="form-control" v-model="filterName" >
          <input type="button" class="btn btn-danger mt-3" value="Add" @click.prevent="addName">
          <ul>
            <li v-for="name in filteredName" :key="name"> {{ name }}</li>
          </ul>
        </div>
      </div>
      <div class="col-xs-12 col-md-6">

      </div> 
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
//when anything is declared globally in main.js there is no need to impport the file
//the march() method helps to find if strings compare have similar data properties
export default {
  name: 'home',

  data () {
    return {
      texts: ['HELLO Filters'],
      names: ['Ekom', 'Kingsley', 'Richie', 'Idara', 'Femi', 'Emma', 'Peter', 'Ngozi', 'Ugo'],
      filterName: ''
    }
  },

  //you can register your filters locally by calling it within the page
  filters: {
    //call the filter function which will be passed inside the interpolation
    toUpperCase(value) {//a value must be passed to specify which data is to be filtered
      return value.toUpperCase();
    }
  },

  //this is an alternative method for using filters using the computed property
  computed: {
    filteredName () {
      return this.names.filter((items ) => {//callbacks are called
        return items.match(this.filterName)
      })
    }
  },

  methods: {
    addName () {
      this.texts.push(this.filterName)
    }
  }
  
}
</script>
