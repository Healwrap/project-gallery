# 个人项目汇总

这是一个个人项目展示网站，通过时间轴展示个人项目和工程。该项目展示了每个项目的概要信息，包括项目名称、描述、技术栈、在线地址、Git 仓库链接以及轮播图展示截图。同时，项目实现了响应式布局，确保在移动端也能良好展示，并在页面底部固定显示一个 Banner，标明“这是由 cursor 生成的”以及作者的 GitHub 主页链接。

## 特性

- **项目时间轴**  
  通过 Ant Design 的 Timeline 组件展示项目时间线，支持按更新时间排序和标签筛选，且采用新 API（`items` 属性）避免使用已弃用的 `Timeline.Item`。

- **项目卡片**  
  每个项目以卡片形式展示，包括项目描述、技术栈、轮播图（自动每 2 秒切换）、以及在线地址与 Git 仓库链接。卡片点击动作已禁用，所有链接均通过独立按钮展示。

- **响应式设计**  
  使用媒体查询和 CSS Modules（通过 Sass 实现），使得项目在不同屏幕尺寸下均具备良好的展示效果。卡片宽度可根据屏幕大小动态调整：

  - 小于 768px：80% 屏幕宽度
  - 大于 768px：70% 屏幕宽度
  - 大于 1024px：固定 750px

- **自定义轮播图**  
  为轮播图设置自动播放（2 秒切换）、左右箭头（箭头样式统一定义在 SCSS 文件中）以及自定义指示点样式，确保在浅色背景下依然清晰可见。

- **全局 Banner 信息**  
  页面底部固定一个带有高斯模糊效果的 Banner，展示“这是由 cursor 生成的”以及 GitHub 链接，方便用户快速访问。

- **TypeScript & 全局类型定义**  
  项目基于 React+TypeScript 构建，通过配置 `tsconfig.json` 自动引入全局类型定义文件 `types.d.ts`，无需在每个文件中手动导入。

## 技术栈

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)
- [Sass (SCSS)](https://sass-lang.com/)
- [Vite](https://vitejs.dev/) 或其他构建工具

## 项目结构

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Banner.tsx
│   │   ├── Banner.module.scss
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.module.scss
│   │   ├── ProjectTimeline.tsx
│   │   └── ProjectTimeline.module.scss
│   ├── types.d.ts          // 全局类型定义
│   ├── App.tsx
│   ├── App.scss
│   └── index.tsx
├── package.json
└── tsconfig.json
```

## 安装与运行

确保已安装 Node.js（推荐 Node.js 14 及以上版本）和 npm 或 yarn。

1. **克隆项目**

   ```bash
   git clone https://github.com/pepedd864/your-project-repo.git
   cd your-project-repo
   ```

2. **安装依赖**

   ```bash
   npm install
   # 或者
   yarn install
   ```

3. **启动开发服务器**

   ```bash
   npm run dev
   # 或者
   yarn dev
   ```

   启动后可在浏览器中访问 `http://localhost:3000`（或终端提示的端口）查看项目效果。

## 构建生产环境包

打包项目以用于生产环境部署：

```bash
npm run build
# 或者
yarn build
```

构建产物通常生成在 `dist` 文件夹中，可部署至任意静态资源服务器（如 GitHub Pages、Vercel、Netlify 等）。

## 配置说明

- **全局类型定义**  
  在 `tsconfig.json` 中已通过 `include`（或 `files`）配置引入 `types.d.ts`，因此全局类型定义将自动可用，无需在每个文件中手动导入。

- **Sass/SCSS & CSS Modules**  
  各组件的样式均放置于对应的 `.module.scss` 文件中，保证样式模块化、互不干扰，同时通过 Sass 的嵌套语法编写整洁样式。

- **Ant Design 警告**  
  项目已将 Timeline 的使用由 `<Timeline.Item>` 替换为 `items` 属性，并建议使用 React 16 至 18（推荐降级 React 版本以消除兼容警告）。

## 贡献

欢迎提交问题和 Pull Request，帮助改进此项目，您的反馈将是我们前进的动力！

## License

该项目遵循 MIT 许可证，详情请参阅 [LICENSE](LICENSE) 文件。

---

**备注**  
此项目由 cursor 自动生成，作者维护 GitHub 主页为 [@pepedd864](https://github.com/pepedd864)。
