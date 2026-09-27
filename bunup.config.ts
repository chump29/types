import { defineConfig } from "bunup"
import { copy } from "bunup/plugins"

const config: ReturnType<typeof defineConfig> = defineConfig({
  footer: "// ♡ ᓚᘏᗢ ♡",
  plugins: [copy(["LICENSE", "package.json", "README.md"])]
})

export default config
