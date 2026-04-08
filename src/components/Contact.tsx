import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              期待与你 <br/>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                建立联系
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
              如果您正在寻找具备出海实操与 AI 落地能力的人才，欢迎随时通过电话或微信与我联系，期待能与贵团队沟通交流！
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-6 px-8 py-6 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] hover:border-blue-500/50 transition-all group backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <div className="text-left">
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold mb-1">Phone / Wechat</p>
                <a 
                  href="tel:18829955651" 
                  className="text-2xl md:text-3xl text-white font-bold tracking-tight hover:text-blue-400 transition-colors"
                >
                  18829955651
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 text-gray-600 text-xs uppercase tracking-[0.3em]"
          >
            Open to new job opportunities
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
