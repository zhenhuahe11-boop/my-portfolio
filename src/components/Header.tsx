import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Home, Briefcase, Code, User } from 'lucide-react';


const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 监听滚动，改变导航栏背景透明度
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#home', icon: <Home size={18} /> },
    { name: '技能', href: '#skills', icon: <Code size={18} /> },
    { name: '项目', href: '#projects', icon: <Briefcase size={18} /> },
    { name: '经历', href: '#experience', icon: <User size={18} /> },
    { name: '联系', href: '#contact', icon: <Phone size={18} /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo / 品牌标识 */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
        >
          Eric何振华作品集
        </motion.div>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <span className="text-gray-500">{link.icon}</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* 社交媒体图标已移除，以保持极简设计 */}

        {/* 移动端菜单按钮 */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-3 text-lg"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-zinc-800 text-center text-gray-500 text-xs uppercase tracking-widest">
                Portfolio.AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
