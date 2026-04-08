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
    description: '利用 Cursor AI 从 0 到 1 敏捷开发 "Shine Mango" 垂类独立站；并运用 Nano Banana 等前沿 AI 模型，精准产出欧美审美的高端营销海报与产品图。实现从 "极速建站" 到 "AI 视觉闭环" 的海外营销全链路落地。',
    image: '/shine_mango_v2.png',
    tags: ['AI Branding', 'Agile Build', 'Visual AI', 'GTM/Tracking'],
    link: 'https://shinemango.com'
  },
  {
    id: 'more-cases',
    title: '更多精选出海与 AI 实战案例',
    description: '包含达人病毒式爆款营销、300+ 达人矩阵 SOP 搭建、TikTok 百万级精准获客与变现，以及前沿 AI Agent 自动化赋能业务的系列实战案例与真实业务数据复盘。',
    image: '/tiktok_case.png',
    tags: ['Notion Portfolio', 'Social Media', 'Affiliate SOP', 'AI Automation'],
    link: 'https://www.notion.so/Eric-AI-3135591b6572801497eed064b1c47338'
  }
];
