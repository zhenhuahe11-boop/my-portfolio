import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectData } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        {/* 标题 */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            实战项目经验
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl"
          >
            从品牌策划到技术落地，展示我如何利用 AI 与专业经验交付高质量成果。
          </motion.p>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-[2rem] overflow-hidden hover:border-blue-500/30 transition-all flex flex-col"
            >
              {/* 图片预览区 */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
              </div>

              {/* 内容区 */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-zinc-800 text-gray-400 rounded-full border border-zinc-700/50">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors group/link"
                  >
                    查看详情 <ArrowRight size={18} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex gap-3 ml-auto">
                    <button className="p-2 bg-zinc-800/50 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all">
                      <Github size={20} />
                    </button>
                    <button className="p-2 bg-zinc-800/50 rounded-full text-gray-400 hover:text-white hover:bg-zinc-700 transition-all">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
