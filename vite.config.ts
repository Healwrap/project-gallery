import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		visualizer({
			filename: "bundle-analysis.html", // 分析报告输出文件名
			gzipSize: true, // 显示 gzip 后的大小
			brotliSize: true, // 显示 brotli 后的大小
		}),
	],
});
