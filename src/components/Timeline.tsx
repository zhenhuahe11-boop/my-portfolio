import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experienceData } from '../data/experience';

const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            职业生涯轨迹
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 italic"
          >
            从国际贸易专业，到 AI 赋能的数字化引航者。
          </motion.p>
        </div>

        {/* 时间轴容器 */}
        <div className="relative max-w-4xl mx-auto">
          {/* 中心垂直线 (桌面端中心，移动端左侧) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform md:-translate-x-1/2" />

          {/* 时间轴列表 */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <div key={item.id} className="relative flex items-center group">
                {/* 轴线圆点 */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-950 transform -translate-x-1/2 z-10"
                />

                {/* 经历卡片内容 (左右交错展示) */}
                <div className={`flex flex-col w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } ml-16 md:ml-0`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800/50 hover:border-zinc-700 transition-all"
                  >
                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="px-3 py-1 bg-zinc-800 text-blue-400 text-xs font-bold rounded-full border border-blue-500/20">
                        {item.period}
                      </span>
                      <span className="text-gray-500">
                        {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.company && (
                      <p className="text-gray-400 text-sm font-medium mb-3">
                        {item.company}
                      </p>
                    )}
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
