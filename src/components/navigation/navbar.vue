<template>
  <nav class="navbar">
    <router-link class="navbar-logo" tag="a" to="/">
      PPC
    </router-link>
    <div class="navbar-menu">
      <router-link tag="div" exact active-class="active" class="navbar-menu-item" to="/">
        Home
      </router-link>
      <router-link tag="div" active-class="active" class="navbar-menu-item" :to="{ name: 'calculator' }">
        Calculator
      </router-link>
    </div>
  </nav>
</template>

<style lang="sass">
  .navbar
    width: 1600px
    height: 60px
    z-index: 30
    padding-left: 50px
    border: 1px solid black
    background-color: #fff
    position: fixed
    display: flex
    align-items: center
    &-logo
        border: 1px solid aqua
        color: aqua
        padding: 5px 10px
        border-radius: 10px
    &-menu
        display: flex
        &-item
            margin-left: 30px
            cursor: pointer
            &.active
                color: red
            &:hover
              color: green
            

</style>