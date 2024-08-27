// export default defineEventHandler(({ req, res, context }) => {
//   const hostname = req.headers.host || "example.com"

//   const mainDomain = ["localhost:3000", "example.com"]

//   if (!mainDomain.includes(hostname)) {
//     const currentHost =
//       process.env.NODE_ENV === "production"
//         ? hostname.replace(`.example.com`, "")
//         : hostname.replace(`.localhost:3000`, "")

//     console.log({ currentHost })
//     context.subdomain = currentHost
//   }
// })

export default defineEventHandler((event) => {
  const hostname = event.node.req.headers.host || "example.com"

  // if (hostname.startsWith('blog.')) {
  //   event.context.subdomain = 'blog'
  // }
})
