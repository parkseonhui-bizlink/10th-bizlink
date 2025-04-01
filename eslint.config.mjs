import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier' // Prettierとコンプリート防止
  ),
  {
    plugins: ['prettier'], // Prettierプラグイン追加
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
    },
  },
]

export default eslintConfig
