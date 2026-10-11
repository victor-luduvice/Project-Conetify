import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    files: [
      'components/layout/CookieBanner.tsx',
      'components/ui/carousel.tsx',
      'components/ui/use-mobile.tsx',
      'hooks/use-mobile.tsx',
    ],
    rules: {
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'coverage/**', 'next-env.d.ts'],
  },
]

export default eslintConfig
