export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log('apiBase: ', config.public.api1Base);
});
