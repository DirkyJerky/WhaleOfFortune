import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
    plugins: [viteSingleFile(), cloudflare()],
})