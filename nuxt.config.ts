import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  head: {
    htmlAttrs: {
      lang: "fr", // https://fr.nuxtjs.org/api/configuration-head#htmlattrs
    },
  }
});
