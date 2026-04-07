export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export const projectData: Project[] = [
  {
    id: 'shine-mango',
    title: 'Shine Mango (芒果 B2B 出海品牌)',
    description: '从 0 到 1 打造的 Keitt 芒果出口品牌。利用 AI 辅助完成全场景品牌策划、响应式外贸官网搭建以及海外 SEO 基础布局。',
    image: '/shine_mango_preview.png',
    tags: ['Brand Identity', 'AI Website', 'SEO', 'Global Logistics'],
    link: 'https://shinemango.com'
  },
  {
    id: 'ai-discovery',
    title: '个人效率与 AI 自动化探索',
    description: '利用各类 AI 代理和编程工具提升业务效率的实战案例。独立使用 Cursor 开发网站与 App 雏形，探索部署本地/云端 AI Agents。',
    image: '/ai_automation_preview.png',
    tags: ['Cursor', 'AI Agents', 'n8n', 'Productivity'],
    link: '#'
  }
];
