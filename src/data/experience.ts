export interface Experience {
  id: number;
  period: string;
  title: string;
  company?: string;
  description: string;
  type: 'work' | 'education';
}

export const experienceData: Experience[] = [
  {
    id: 1,
    period: '2024 - 至今',
    title: 'TikTok 电商及海外业务全栈探索',
    description: '专注 AI 辅助开发与自动化流程，探索 TikTok 电商矩阵运营及 AI Agents 在业务场景中的落地应用。',
    type: 'work'
  },
  {
    id: 2,
    period: '2023 - 2024',
    title: '外贸业务员 (B2B 销售)',
    company: '跨境贸易公司',
    description: '负责海外客户开发与维护，处理 B2B 全链路商务谈判、订单跟进及物流协调。',
    type: 'work'
  },
  {
    id: 3,
    period: '2022 - 2023',
    title: '亚马逊运营助理',
    company: '电商初创企业',
    description: '辅助处理亚马逊店铺日常运营、产品上架、库存管理及基础站内广告调优。',
    type: 'work'
  },
  {
    id: 4,
    period: '2020 - 2024',
    title: '国际贸易专业',
    company: '全日制本科',
    description: '系统学习国际贸易实务、市场营销及跨文化沟通，奠定全球化视野。',
    type: 'education'
  }
];
