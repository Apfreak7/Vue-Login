<template>
  <Header />
  <h1>Hello User, Welcome to Home Page!</h1>
</template>

<script>
import Header from "./MyHeader.vue";

export default {
  name: "MyHome",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push('/signup');
    }
  },
};
</script>
