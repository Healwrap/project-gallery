import { ProjectStatus } from "./const";

export const projects: Project[] = [
	{
		name: "仿 Arco Design Vue组件库",
		status: ProjectStatus.inprogress,
		stacks: [
			"Vue3",
			"TypeScript",
			"Vite",
			"Vitest",
			"StoryBook",
			"pnpm",
			"monorepo",
			"Sass",
		],
		link: "https://arch-desgin.github.io/arch-ui-vue",
		git: "https://github.com/arch-desgin/arch-ui-vue",
		desc: `<ul>
    <li>
        <strong>描述：</strong>
        <ul>
            <li>基于Vue3、TypeScript、Vite、Vitest、StoryBook、pnpm、monorepo等技术栈开发的组件库</li>
        </ul>
    </li>
    <li>
        <strong>项目亮点：</strong>
        <ul>
            <li>搭建项目：使用pnpm workspace搭建monorepo，方便组件开发的同时实时预览调试，通过根据环境切换package.json配置，实现开发过程无需build即可预览</li>
            <li>打包优化：组件分包，CSS拆分，使用外置依赖优化打包体积</li>
            <li>命令式组件生成器：编写组件生成命令，降低开发工作量</li>
        </ul>
    </li>
</ul>`,
		imgs: [
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/79d7a9a120d0a8ee7938e6d0a4907e39.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/7729f62825b40b85fe1426a975449e8b.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/8c00db8bcb4d037c5504bea286d45f6a.png",
		],
		category: ["前端", "练手基建Demo"],
		createTime: "2024-11-03",
		updateTime: "2025-02-25",
		enable: true,
	},
	{
		name: "仿 axios 项目",
		status: ProjectStatus.paused,
		stacks: [
			"JavaScript",
			"TypeScript",
			"Rollup",
			"ESLint",
			"Prettier",
			"Husky",
			"Vite",
			"React",
			"React-DOM",
			"Node.js",
		],
		link: "",
		git: "https://github.com/Healwrap/axios",
		desc: "本项目是一个关于 仿axios 的项目，包含多个包及配置文件。使用了 Rollup 进行构建，有丰富的开发和构建脚本，如清理、构建、发布等。使用 ESLint 和 Prettier 进行代码规范和格式化，Husky 进行 Git 钩子管理。部分子项目使用了 Vite 进行开发，并且依赖 React 等相关技术栈。",
		imgs: [],
		category: ["前端", "练手基建Demo"],
		createTime: "2024-07-21",
		updateTime: "2024-11-17",
		enable: true,
	},
	{
		name: "常青招聘",
		status: ProjectStatus.maintained,
		stacks: [
			"Vue3",
			"TypeScript",
			"Vite",
			"Ant-Design-Vue",
			"Echarts",
			"antv/g6",
			"Alova",
			"VueUse",
			"Sass",
			"TailwindCSS",
			"Eslint",
			"Prettier",
			"husky",
		],
		link: "https://eh.healwrap.cn/",
		git: "https://github.com/evergreen-recruitment/frontend",
		desc: `<ul>
  <li>
    <strong>描述：</strong>
    <ul>
      <li>
        基于 Vue3 的在线招聘平台。实现用户端界面和公司端管理界面；功能包含：查找岗位、查找公司、查看岗位详情、管理用户信息、管理简历、编辑在线简历等功能。
      </li>
    </ul>
  </li>
  <li>
    <strong>技术栈：</strong>
    <ul>
      <li>Vue3、Vue Router、Ant Design Vue、TypeScript、Tailwind CSS、Alova、Vite5</li>
    </ul>
  </li>
  <li>
    <strong>项目亮点：</strong>
    <ul>
      <li>系统架构：工程模板为通用项目模板；项目使用 Tailwind CSS；登录验证使用 Cookie 方案。</li>
      <li>代码优化：页面需要在不同位置请求接口，而 Vue SFC 一般只能在页面初始化时统一请求所有接口。编写 V-Scroll 指令，实现在滚动到网页指定位置时请求接口；由于需要编写复杂组件，使用 Vue JSX，实现单文件中可编写复杂页面。</li>
      <li>性能优化：网页使用大量图片，使用懒加载进行优化；使用 gzip 压缩加快网页加载；使用 HTTP2 协议提升网站的性能和安全性。</li>
    </ul>
  </li>
</ul>
`,
		imgs: [
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/3ba365b4526aa6f3e7f14575750cadfa.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/4fe6668839f63f3f5ee5422272998bbf.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/b4711c0c25923ddc51b19e6b324420b1.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/dabf838dd40c1fae67d4352b66f91587.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/7e4b57a10ae79ae2f252c8b8faf0d0c5.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/17f9d03bff375f460099e7115a8903ec.png",
		],
		category: ["前端", "练手业务Demo"],
		createTime: "2024-03-07",
		updateTime: "2024-07-04",
		enable: true,
	},
	{
		name: "简储云盘",
		status: ProjectStatus.inprogress,
		stacks: [
			"React18",
			"MUI",
			"React Router",
			"Zustand",
			"Tailwind CSS",
			"Vite5",
			"TypeScript",
			"Axios",
		],
		link: "",
		git: "https://github.com/Healwrap/hp-drive-frontend",
		desc: `<ul>
		<li>
		<strong>描述：</strong>
		<ul>
			<li>基于React18、Material Design UI、Zustand等技术栈开发的现代的、功能全面的云盘项目，支持
			上传文件/文件夹、分享文件、回收站、隐藏空间、AI助手等功能。同时也适配移动端</li>
		</ul>
		</li>
		<li>
		<strong>项目亮点：</strong>
		<ul>
		<li>抽离核心上传功能为单独的NPM包并发布，其中包含重复文件秒传、大文件分片断点续传、文件夹上
传下载、上传任务队列管理等等核心功能。</li>
<li>配置 Input 元素支持单/多文件上传，文件夹上传；通过ondrop事件支持拖拽文件夹上传。</li>
<li>大文件上传使用分块上传，对于处理大量文件的场景，使用了Web Worker加快处理。</li>
<li>封装类控制上传任务开始暂停取消，创建和管理上传任务队列，处理上传文件时的并发请求。</li>
		</ul>
		</li>
		</ul>`,
		imgs: [],
		category: ["前端", "练手业务Demo"],
		createTime: "2024-07-01",
		updateTime: "2024-08-01",
		enable: true,
	},
	{
		name: "HealWrap · 愈屋",
		status: ProjectStatus.archived,
		stacks: [
			"Vue",
			"Vite",
			"Springboot",
			"JavaScript",
			"Java",
			"Sass",
			"TailwindCSS",
			"Eslint",
			"Prettier",
		],
		link: "",
		git: "https://github.com/Healwrap/hp-blog",
		desc: "HealWrap 是基于 Spring Boot 和 Vue 构建的博客论坛系统。用户未登录可浏览文章，登录后能点赞、评论、下载附件等。其涵盖注册登录、首页文章及板块展示、文章详情操作、文章创作编辑、用户中心资料与积分管理、消息中心查看消息等功能，为用户提供了一个集内容分享、交流互动、个人信息管理于一体的综合性平台。 ",
		imgs: [
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/76923a7541aded7e4c6352c604fea22c.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/bfc47aabe1a66af78c80bbcdaafc7ec2.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/8e078781dc4dfd9d0d3059c272cafb66.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/f17b7c32af73b0c185c1241df0bdaf03.png",
			"https://picgo-img-repo.oss-cn-beijing.aliyuncs.com/img/cb8e9a1ab640129f11f67be511f95f7f.png",
		],
		category: ["前端", "后端", "练手业务Demo"],
		createTime: "2023-04-12",
		updateTime: "2023-06-18",
		enable: true,
	},
	// 可以添加更多项目
];
