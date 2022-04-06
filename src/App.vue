<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding: 0;
  margin: 0;
  background-image: url("./assets/background-img.jpg");
}
.logo {
  width: 100px;
}
.register input {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid turquoise;
}
.register button {
  width: 320px;
  height: 40px;
  margin-bottom: 30px;
  border: 1px solid turquoise;
  background: turquoise;
  color: white;
  cursor: pointer;
}

.login input {
  width: 320px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid turquoise;
}

.login button {
  width: 320px;
  height: 40px;
  margin-bottom: 30px;
  border: 1px solid turquoise;
  background: turquoise;
  color: white;
  cursor: pointer;
}
</style>
