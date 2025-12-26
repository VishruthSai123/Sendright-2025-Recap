import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiCheck, HiLink } from 'react-icons/hi2';

interface ShareStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareStoryModal: React.FC<ShareStoryModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const APP_LINK = "https://play.google.com/store/apps/details?id=com.vishruth.key1&hl=en_IN";

  const handleShareNow = async () => {
    // Step 1: Copy link to clipboard
    try {
      await navigator.clipboard.writeText(APP_LINK);
      setCopied(true);
      
      // Step 2: After a short delay, redirect to Instagram
      setTimeout(() => {
        // Try to open Instagram app for story creation
        // On mobile, this will open Instagram. On desktop, it will open Instagram web
        const instagramUrl = 'instagram://story-camera';
        const webFallback = 'https://www.instagram.com/';
        
        // Try native app first
        window.location.href = instagramUrl;
        
        // Fallback to web after a delay if app doesn't open
        setTimeout(() => {
          window.open(webFallback, '_blank');
        }, 2000);
      }, 800);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = APP_LINK;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] overflow-y-auto bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="min-h-full flex items-center justify-center p-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm sm:max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
            >
              <HiXMark className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Header */}
            <div className="pt-6 pb-3 px-4 sm:pt-8 sm:pb-4 sm:px-6 text-center">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1">Share to Instagram Story</h3>
              <p className="text-xs sm:text-sm text-white/50">Show your friends how you type smarter</p>
            </div>

            {/* Share Image Preview */}
            <div className="px-4 pb-3 sm:px-6 sm:pb-4">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src="/assets/share-card.png" 
                  alt="SendRight Share Card" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback placeholder if image not found
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml,' + encodeURIComponent(`
                      <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg">
                        <rect width="100%" height="100%" fill="#0a0a0a"/>
                        <rect x="50" y="50" width="500" height="500" rx="40" fill="#111"/>
                        <text x="300" y="280" text-anchor="middle" fill="#22c55e" font-size="32" font-family="Arial" font-weight="bold">SendRight</text>
                        <text x="300" y="320" text-anchor="middle" fill="#666" font-size="18" font-family="Arial">Snapshot 2025</text>
                        <text x="300" y="380" text-anchor="middle" fill="#444" font-size="14" font-family="Arial">Add share-card.png to /public/assets/</text>
                      </svg>
                    `);
                  }}
                />
              </div>
            </div>

            {/* Steps */}
            <div className="px-4 pb-3 space-y-2 sm:px-6 sm:pb-4 sm:space-y-3">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border ${copied ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'} transition-all`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${copied ? 'bg-green-500 text-white' : 'bg-white/10 text-white/60'}`}>
                  {copied ? <HiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : '1'}
                </div>
                <div className="flex-1">
                  <p className={`text-xs sm:text-sm font-medium ${copied ? 'text-green-400' : 'text-white/80'}`}>
                    {copied ? 'Link copied!' : 'Click Share Now to copy link'}
                  </p>
                </div>
                {copied && <HiLink className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />}
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-xs sm:text-sm font-bold text-white/60">
                  2
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-white/80">Add link via <span className="text-pink-400">Link Sticker</span></p>
                  <p className="text-[10px] sm:text-xs text-white/40">Paste the copied link in Instagram</p>
                </div>
              </motion.div>
            </div>

            {/* Share Now Button */}
            <div className="p-4 pt-2 sm:p-6 sm:pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShareNow}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Share Now
              </motion.button>
            </div>
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ShareStoryModal;
