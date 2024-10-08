import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '2.5rem',
      },
    },
    extend: {
      colors: {
        'base-10': 'hsl(var(--base-10))',
        'base-15': 'hsl(var(--base-15))',
        'base-20': 'hsl(var(--base-20))',
        'base-30': 'hsl(var(--base-30))',
        'base-40': 'hsl(var(--base-40))',
        'base-45': 'hsl(var(--base-45))',
        'base-65': 'hsl(var(--base-65))',
        'base-70': 'hsl(var(--base-70))',
        'base-80': 'hsl(var(--base-80))',
        'base-90': 'hsl(var(--base-90))',
        orange: 'hsl(var(--orange))',
        dark: 'hsl(var(--dark))',
      },
      backgroundColor: {
        'base-10': 'hsl(var(--base-10))',
        'base-15': 'hsl(var(--base-15))',
        'base-20': 'hsl(var(--base-20))',
        'base-30': 'hsl(var(--base-30))',
        'base-40': 'hsl(var(--base-40))',
        'base-45': 'hsl(var(--base-45))',
        'base-65': 'hsl(var(--base-65))',
        'base-70': 'hsl(var(--base-70))',
        'base-80': 'hsl(var(--base-80))',
        'base-90': 'hsl(var(--base-90))',
        orange: 'hsl(var(--orange))',
        dark: 'hsl(var(--dark))',
      },
      gradientColorStops: {
        'base-10': 'hsl(var(--base-10))',
        'base-15': 'hsl(var(--base-15))',
        'base-20': 'hsl(var(--base-20))',
        'base-30': 'hsl(var(--base-30))',
        'base-40': 'hsl(var(--base-40))',
        'base-45': 'hsl(var(--base-45))',
        'base-65': 'hsl(var(--base-65))',
        'base-70': 'hsl(var(--base-70))',
        'base-80': 'hsl(var(--base-80))',
        orange: 'hsl(var(--orange))',
      },
    },
  },
}
