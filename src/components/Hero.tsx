import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Globe, BarChart, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  // 动画配置：容器子元素交错出现
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const highlights = [
    {
      icon: <Globe className="text-blue-400" size={24} />,
      title: '跨境电商专家',
      desc: '亚马逊、B2B 外贸到 TikTok 电商的全链路实操经验。',
    },
    {
      icon: <BarChart className="text-purple-400" size={24} />,
      title: '海外社媒精准运营',
      desc: '专注针对 B2B 获客的社媒矩阵搭建，具备百万级播放量（最高 2.9M+）爆款实操经验。',
    },
    {
      icon: <Cpu className="text-emerald-400" size={24} />,
      title: 'AI 全栈落地',
      desc: '利用 Cursor、AI Agents 独立开发并落地业务工具。',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 背景装饰：模糊渐变球 */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Slogan 标题 */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            懂出海业务，<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
              更懂 AI 落地
            </span>
          </motion.h1>

          {/* 个人简介 */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            24年国际贸易背景，专注 B2B 获客与海外社媒运营。
            我用 AI 赋能全栈开发，助力品牌在全球市场高效成长。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              查看我的项目 <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full font-semibold transition-all border border-zinc-700 flex items-center gap-2">
              获取简历 <Download size={18} />
            </a>
          </motion.div>

          {/* 亮点卡片 (Highlights) */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl backdrop-blur-sm hover:border-zinc-700 transition-colors group"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
