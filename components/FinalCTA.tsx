
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDownTray, HiSparkles } from 'react-icons/hi2';
import ShareStoryModal from './ShareStoryModal';
import { MusicContext } from '../App';

const FinalCTA: React.FC = () => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const { fadeOutAndStop } = useContext(MusicContext);
  const APP_LINK = "https://play.google.com/store/apps/details?id=com.vishruth.key1&hl=en_IN";
  
  const shareText = `I'm a SendRight user and it's a game-changer!

- Saves me hours every week with AI-powered smart replies
- Context-aware typing that actually understands what I mean
- 100% private - everything stays on my device

Type smarter, not harder.

Download SendRight now:
${APP_LINK}`;

  const shareTextEncoded = encodeURIComponent(shareText);
  const appLinkEncoded = encodeURIComponent(APP_LINK);

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      url: `https://wa.me/?text=${shareTextEncoded}`,
      color: "bg-[#25D366] hover:bg-[#20BD5A]"
    },
    {
      name: "X",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${shareTextEncoded}`,
      color: "bg-black hover:bg-gray-900 border border-white/20"
    },
    {
      name: "Telegram",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      url: `https://t.me/share/url?url=${appLinkEncoded}&text=${shareTextEncoded}`,
      color: "bg-[#0088cc] hover:bg-[#0077b5]"
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${appLinkEncoded}`,
      color: "bg-[#0A66C2] hover:bg-[#004182]"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: `https://www.facebook.com/sharer/sharer.php?u=${appLinkEncoded}`,
      color: "bg-[#1877F2] hover:bg-[#0C5DC7]"
    }
  ];

  const handleInstall = () => {
    fadeOutAndStop();
    window.open(APP_LINK, '_blank');
  };

  const handleSocialClick = () => {
    fadeOutAndStop();
  };

  const handleShareStory = () => {
    fadeOutAndStop();
    setIsStoryModalOpen(true);
  };

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Confetti-like particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 0.8, 0], y: ['0vh', '100vh'] }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            style={{ 
              backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#ffffff' : '#22c55e50',
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Background glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] sm:h-[60%] bg-green-500/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl z-10 space-y-5 sm:space-y-6 md:space-y-8 px-2">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm flex items-center gap-2">
            <HiSparkles className="w-4 h-4 text-green-500" />
            <span className="text-green-500 text-xs sm:text-sm font-semibold tracking-wider uppercase">Share the Love</span>
          </div>
        </motion.div>

        {/* Main text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-2 sm:space-y-3"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
            This was SendRight in 2025.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/50 font-light max-w-xl mx-auto">
            Share your journey and help others discover smarter typing.
          </p>
        </motion.div>

        {/* Social Share Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">Share on</p>
          <div className="flex justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleSocialClick}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`${social.color} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all`}
                title={`Share on ${social.name}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Share Story Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleShareStory}
            className="group px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm sm:text-base md:text-lg font-bold rounded-full hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-all shadow-[0_0_25px_rgba(236,72,153,0.25)] flex items-center justify-center gap-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z"/>
            </svg>
            Share Story
          </motion.button>
        </motion.div>

        {/* Download Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.38 }}
          className="pt-2"
        >
          <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider">Download</p>
        </motion.div>

        {/* Install Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleInstall}
            className="group px-10 py-4 sm:px-14 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-base sm:text-lg md:text-xl font-bold rounded-full hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] transition-all shadow-[0_0_30px_rgba(34,197,94,0.25)] flex items-center justify-center gap-3 mx-auto border border-green-400/20"
          >
            <HiArrowDownTray className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-0.5 transition-transform" />
            Get SendRight Free
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="pt-4 space-y-1"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/30">
            sendright.app
          </p>
          <p className="text-[8px] sm:text-[10px] text-white/20">
            © 2025 SendRight. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Instagram Story Modal */}
      <ShareStoryModal isOpen={isStoryModalOpen} onClose={() => setIsStoryModalOpen(false)} />
    </section>
  );
};

export default FinalCTA;
