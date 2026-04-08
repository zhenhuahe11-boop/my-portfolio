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
    id: 'influencer-viral',
    title: '达人爆款视频及数据',
    description: '成功策划并落地多条达人爆款视频，其中两条单视频播放量突破 150W。通过精准选取垂直领域达人并提供视频脚本指导，实现品效合一。',
    image: '/influencer_viral.png',
    tags: ['Influencer Marketing', 'Viral Content', 'Scripting', 'ROI'],
    link: '#'
  },
  {
    id: 'affiliate-sop',
    title: '海外达人矩阵建联 (Affiliate SOP)',
    description: '建立 300+ 垂直领域达人资源库，搭建标准化寄样与跟进 SOP。通过精细化流程管理，实现英区达人履约发稿率近 100%，显著提升品牌海外声量。',
    image: '/affiliate_sop.png',
    tags: ['Affiliate Marketing', 'SOP Design', 'Influencer Outreach', 'Campaign Management'],
    link: '#'
  },
  {
    id: 'tiktok-viral',
    title: 'TikTok 海外社媒精准获客与变现',
    description: '针对运动护具 (Knee pads) 领域的 TikTok 矩阵运营，成功打造多条百万级播放量视频（最高 2.9M+ 播放）。核心策略：优化前3秒视觉钩子（暴力跪地抓眼球）；转化结果：单月贡献 GMV 超 $30,000。',
    image: '/tiktok_case.png',
    tags: ['TikTok Marketing', 'Viral Content', 'GMV Growth', 'Social Commerce'],
    link: '#'
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
