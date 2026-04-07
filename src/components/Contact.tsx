import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

// 自定义 GitHub 图标组件 (因为新版 lucide-react 移除了品牌图标)
const Github = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// 自定义 LinkedIn 图标组件
const Linkedin = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 左侧：联系信息 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">期待与你 <br/><span className="text-blue-500">建立联系</span></h2>
              <p className="text-gray-400 mb-10 max-w-sm">
                无论你是寻求业务合作，还是想聊聊 AI 开发，欢迎随时通过以下方式联系我。
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-blue-500/50 transition-colors">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Email</p>
                    <a href="mailto:hello@example.com" className="text-white hover:text-blue-400 transition-colors font-medium">hello@yourdomain.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-purple-500/50 transition-colors">
                    <Linkedin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">LinkedIn</p>
                    <a href="#" className="text-white hover:text-purple-400 transition-colors font-medium">linkedin.com/in/yourprofile</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                    <Github className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">GitHub</p>
                    <a href="#" className="text-white hover:text-emerald-400 transition-colors font-medium">github.com/yourusername</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右侧：简约表单 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/30 p-8 md:p-10 rounded-[2.5rem] border border-zinc-800/50 backdrop-blur-sm"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">姓名</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">邮箱</label>
                    <input 
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">主题</label>
                  <input 
                    type="text" 
                    placeholder="Subject"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">留言</label>
                  <textarea 
                    rows={4}
                    placeholder="Your Message..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  发送消息 <Send size={18} />
                </button>
                <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest mt-4">
                  Powered by Formspree or custom backend
                </p>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
