import type { RouterOptions } from "@nuxt/schema"

export default <RouterOptions>{
  routes: (_routes) => {
  //   const { ssrContext } = useNuxtApp()
  //   const subdomain = useSubdomain()
  //   if (ssrContext?.event.context.subdomain) subdomain.value = ssrContext?.event.context.subdomain

  //   if (subdomain.value === 'blog') {
  //     const blogRoutes = _routes.filter((i) => i.path.startsWith("/blog"))
  //     const mappedBlogRoutes = blogRoutes.map((i) => ({
  //       ...i,
  //       path: i.path === "/blog" ? i.path.replace("/blog", "/") : i.path.replace("/blog/", "/"),
  //     }))

  //     return mappedBlogRoutes
  //   }
  // },
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) return savedPosition
  //   if (to.hash) {
  //     const el = document.querySelector(to.hash) as HTMLElement
  //     return { left: 0, top: (el?.offsetTop ?? 0) - 30, behavior: "smooth" }
  //   }

  //   if (to.fullPath === from.fullPath) return
  //   return { left: 0, top: 0, behavior: "smooth" }
  },
}
