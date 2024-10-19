import withNuxt from '../.nuxt/eslint.config.mjs'

export default withNuxt(
  // your custom flat configs go here, for example:
  {
    files: ['**/*.ts', '**/*.tsx'],
    // extends: [
    //   "eslint:recommended", "@nuxtjs/eslint-config-typescript", "prettier"
    // ],
    rules: {
            "vue/multi-word-component-names": ["error", {
                ignores: ["index", "default", "404"],
            }],
        },
  }
)
