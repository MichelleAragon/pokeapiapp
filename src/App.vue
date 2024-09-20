<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/pokemons"></router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>