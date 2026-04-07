import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { skillData } from '../data/skills';

const Skills: React.FC = () => {
  // 容器动画
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // 单个技能标签动画
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            核心技能矩阵
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1 bg-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* 技能分类网格 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillData.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/40 p-8 rounded-3xl border border-zinc-800/50 hover:border-zinc-700/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${idx === 0 ? 'bg-blue-500/10 text-blue-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
                  {idx === 0 ? <TrendingUp size={28} /> : <Zap size={28} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{category.description}</p>
                </div>
              </div>

              {/* 技能标签列表 */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(39, 39, 42, 0.8)' }}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-gray-300 text-sm font-medium cursor-default"
                  >
                    <CheckCircle2 size={14} className={idx === 0 ? 'text-blue-500' : 'text-emerald-500'} />
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
