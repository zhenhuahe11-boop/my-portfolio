# 技术设计文档 (TECH_DESIGN)

## 1. 技术栈选型
- **核心框架**：React + TypeScript + Vite
- **样式方案**：Tailwind CSS (原子化 CSS，用于快速构建响应式界面)
- **动画库**：Framer Motion (用于实现页面滚动、卡片进入、鼠标悬停等丝滑交互动画)
- **图标库**：Lucide React (简洁现代的 SVG 图标库)
- **部署平台**：Vercel

## 2. 项目目录结构
采用清晰的组件化与数据分离结构：

```text
src/
├── components/          # UI 组件目录
│   ├── Header.tsx       # 顶部导航栏
│   ├── Hero.tsx         # 首页大标题与个人简介区
│   ├── Skills.tsx       # 技能标签展示区
│   ├── Projects.tsx     # 项目经验卡片列表
│   ├── Timeline.tsx     # 经历时间轴
│   ├── Contact.tsx      # 联系方式区
│   └── Footer.tsx       # 底部页脚
├── data/                # 静态数据目录 (数据与 UI 分离)
│   ├── skills.ts        # 技能数据 (分类：业务与增长 / 技术与 AI 杠杆)
│   ├── projects.ts      # 项目数据 (包含 Shine Mango 等实战项目)
│   └── experience.ts    # 时间轴经历数据
├── App.tsx              # 主页面入口 (组装各组件)
├── main.tsx             # 渲染入口
└── index.css            # 全局样式 (包含 Tailwind 指令)