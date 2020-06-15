<template>
  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import Navbar from '@/components/navigation/navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang='sass'>
*
  box-sizing: border-box
  margin: 0
  padding: 0
  font-family: sans-serif

#app
  width: 1600px
  margin: 0 auto

main
  padding-top: 60px
  position: relative

  
a
  color: #000
  text-decoration: none
  &:hover
    color: #000

button
  border: none
  background: none
  border: 1px solid black
  padding: 5px 10px
  cursor: pointer
  &:focus
    outline: none
</style>
