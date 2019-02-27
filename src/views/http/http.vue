<template>
    <div class="container">
       <div class="row">
           <div class="col-md-6 col-xs-12">
               <br>
               <h2><strong>HTTP Request GET using axios</strong></h2>
               <br>
               <ol v-if="posts && posts.length">
                   <li v-for="(post, index) of posts" :key="index">
                       <h3><strong>{{ post.title | toUpperCase }}</strong></h3>
                       <p><em>{{ post.body }}</em></p>
                   </li>
               </ol>
           </div>
          
           <div class="col-md-6 col-xs-12">
               <h2 class="mt-4"><strong>Errors Found in GET Request</strong></h2>
               <form @click.prevent="postItem"  >
                   <div class="form-group">
                        <label for="name">Title:</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Title" 
                            v-model="postBody.title">
                        <br>
                        <textarea   
                            name="text" 
                            id="text" 
                            cols="30" 
                            rows="10" 
                            v-model="postBody.text" 
                            placeholder="Body Message"
                            class="form-control"></textarea>
                        <br>
                        <button type="submit" class="btn btn-success">Submit</button>
                   </div>
               </form>
           </div>
       </div>
    </div>
</template>

<script>
import axios from 'axios' 

export default {

    data() {
        return {
            result: '',
            posts: [],
            postBody: {
                title: '',
                text: ''
            }
        }
    },
    
    filters: {
    //call the filter function which will be passed inside the interpolation
        toUpperCase(value) {//a value must be passed to specify which data is to be filtered
        return value.toUpperCase();
        }
    },

    async created () {
        try {
            const response = await axios.get('http://jsonplaceholder.typicode.com/posts')
             this.posts = response.data
        } catch(e) {
             alert(e)
         }
    },

    methods: {
        async postItem () {
            try {
                await axios.post('http://jsonplaceholder.typicode.com/posts', {
                    body: this.postBody
                })
            }catch (e) {
                alert(e)
            }
        }
    }
}
</script>

