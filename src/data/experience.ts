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
    period: '2025.04 - 至今',
    title: 'TikTok 独立站操盘手 (英美区)',
    company: '东莞市拓耀实业有限公司',
    description: '0-1 独立操盘英美区 TikTok 账号与小店闭环，单月 GMV 突破 $30,000 美金；独立打造最高 290 万+ 播放量爆款短视频。主导海外网红建联矩阵，每月建联 50+ 垂直领域达人，其中英区达人履约率逼近 100%。同时开展 AI 自动化（如运用 Cursor 辅助建站、结合大模型优化工作流）等独立开发实践。',
    type: 'work'
  },
  {
    id: 2,
    period: '2024.08 - 2025.02',
    title: '外贸业务员 (B2B 销售)',
    company: '深圳市大鹏激光科技有限公司',
    description: '构建基于 LinkedIn 与 WhatsApp 的线上精准拓客矩阵，累计挖掘并沉淀 350+ 份高净值客户 CRM 档案。深度跟进大型机械设备出海的长期跟进业务，全英文独立输出针对复杂应用场景的定制化配置方案与技术文档。',
    type: 'work'
  },
  {
    id: 3,
    period: '2024.04 - 2024.07',
    title: '亚马逊运营助理',
    company: '米沃照明科技有限公司',
    description: '精准洞察海外买家诉求，通过定制化沟通策略修复满意度；3个月内成功挽回/新增 14 条高质量好评（占历史累计好评量 60%）。内部经验萃取，形成《高转化邀评与客诉处理 SOP》，并组织跨部门级专项分享会。',
    type: 'work'
  },
  {
    id: 4,
    period: '2020.09 - 2024.09',
    title: '国际经济与贸易专业',
    company: '广东科技学院 (全日制本科)',
    description: '专业排名前 3%，获校一等奖学金。斩获 OCALE 全国跨境电商创新创业大赛团体三等奖、POCIB 全国外贸从业能力个人及团队奖。具备 CET-6 英语水平及跨国商务沟通能力。',
    type: 'education'
  }
];
