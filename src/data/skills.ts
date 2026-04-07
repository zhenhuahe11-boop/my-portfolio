export interface Skill {
  name: string;
  level?: number; // 0-100, optional for visual progress if needed
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillData: SkillCategory[] = [
  {
    title: '业务与增长',
    description: '深耕跨境电商全链路，专注品牌出海与海外流量获客。',
    skills: [
      '海外数字营销 (SEO/SEM)',
      'Google Ads 投放',
      'B2B 外贸全链路流程',
      'TikTok 电商运营',
      '亚马逊平台实操',
      '海外社媒矩阵搭建'
    ],
  },
  {
    title: '技术与 AI 杠杆',
    description: '利用 AI 工具提升开发效率，探索智能体在业务中的落地。',
    skills: [
      'AI 辅助编程 (Cursor/Copilot)',
      'React + TypeScript 开发',
      'Tailwind CSS 响应式布局',
      'AI 智能体部署 (OpenClaw)',
      'AI 视频/图片内容生成',
      '自动化流程设计 (n8n/Make)'
    ],
  }
];
