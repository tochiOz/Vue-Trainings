<template>
  <div>
    <div>
      <b-navbar 
        toggleable="lg" 
        type="dark" 
        variant="warning">

        <b-navbar-brand href="/">Vue-Training</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item href="/" >Filter & Mixins</b-nav-item>
              <b-nav-item href="/http" >Serverside Vue</b-nav-item>
              <b-nav-item href="/store/display" >Vuex</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav>
              <b-nav-item-dropdown text="Animations" left-alignment>
                <b-dropdown-item href="/animation" >Single Animations</b-dropdown-item>
                <b-dropdown-item href="/multipleAnimation" >Multiple Animations</b-dropdown-item>
                <b-dropdown-item href="/jsAnimation" >Javascript Animations</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item href="/groupAnimations" >Group Animations</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <!-- <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Dropdown 1,2,3" right-alignment>
                <b-dropdown-item href="#one" >one</b-dropdown-item>
                <b-dropdown-item href="#two" >two</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item href="#three" >three</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav> -->
          </b-collapse>
      </b-navbar>
    </div>
    
    <div class="router">
      <router-view/>
    </div>
  
    <footer>
      <b-card class="footer">
        <b-row class="warning" >
          <b-col>
            &copy; Copyright, 2019
          </b-col>
          <b-col right class="foot2 ml-auto">
            Vue Training
          </b-col>
        </b-row>
      </b-card>
    </footer>
  </div>
  
</template>

<style scoped>
  .router {
    min-height: 85vh;
  }

  .footer {
   background-color: #fcad05; 
   color: aliceblue;
  }

  .foot2 {
    display: flex;
    justify-self: flex-end;
  }

  b-nav-item {
    font-size: 16px;
  }
</style>
