# 个人项目汇总

该项目展示了个人的多个项目工程，以时间轴形式呈现。项目主要由 `ProjectTimeline.tsx`时间轴组件和 `ProjectCard` 项目卡片组件组成，支持项目筛选、轮播图预览等功能，并在移动端保持良好布局。

## 功能特点
- 时间轴：可根据标签筛选，展示项目创建时间及近期更新情况  
- 项目卡片：卡片内含描述信息、技术栈、链接和轮播图  
- 响应式布局：SCSS 模块化，移动端与桌面端的自适应展示  

## 文件结构
部分核心文件如下：
```plaintext
src/
  ├── components/
  │   ├── ProjectCard.tsx
  │   ├── ProjectCard.module.scss
  │   ├── ProjectTimeline.tsx
  │   └── ProjectTimeline.module.scss
  ├── App.tsx
  ├── main.tsx
  └── projects.ts
package.json
pnpm-lock.yaml
```

## 安装与运行
```bash
# 安装依赖
npm install
# 或
pnpm install

# 启动开发服务器
npm run dev
```
启动后可在浏览器中访问本地端口查看效果（默认 http://localhost:5173）。

## 技术栈
- React + TypeScript  
- [Ant Design](https://ant.design/)  
- Sass (SCSS)  
- Vite  

更多配置请参阅 `package.json`。欢迎提交 Issue 或 Pull Request。