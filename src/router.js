import { createRouter, createWebHistory } from "vue-router";
import MyHome from "./components/MyHome.vue";
import LoginForm from "./components/LoginForm.vue";
import SignUpForm from "./components/SignUpForm.vue";
import ContactUs from "./components/ContactUs.vue";
import AboutUs from "./components/AboutUs.vue";

const routes = [
  {
    name: "MyHome",
    component: MyHome,
    path: "/",
  },
  {
    name: "LoginForm",
    component: LoginForm,
    path: "/login",
  },
  {
    name: "SignUpForm",
    component: SignUpForm,
    path: "/signup",
  },
  {
    name: "ContactUs",
    component: ContactUs,
    path: "/contactus",
  },
  {
    name: "AboutUs",
    component: AboutUs,
    path: "/aboutus",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
