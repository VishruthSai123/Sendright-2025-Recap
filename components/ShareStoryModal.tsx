import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiCheck, HiArrowDownTray, HiCheckCircle, HiClipboardDocument } from 'react-icons/hi2';
import { FaInstagram } from 'react-icons/fa';

interface ShareStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Toast Component
const Toast: React.FC<{ message: string; isVisible: boolean; onClose: () => void }> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[300] px-4 py-3 bg-green-500 text-white rounded-xl shadow-lg shadow-green-500/30 flex items-center gap-2 max-w-[90vw]"
        >
          <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ShareStoryModal: React.FC<ShareStoryModalProps> = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState<'idle' | 'sharing' | 'downloaded' | 'success'>('idle');
  const [toast, setToast] = useState<{ show: boolean; message: string }>({ show: false, message: '' });
  const APP_LINK = "https://play.google.com/store/apps/details?id=com.vishruth.key1&hl=en_IN";
  const IMAGE_PATH = "/assets/share-card.png";

  // Detect device type
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);
  const isMobile = isIOS || isAndroid;

  // Show toast helper
  const showToast = (message: string) => {
    setToast({ show: true, message });
  };

  // Copy to clipboard with multiple fallbacks
  const copyToClipboard = async (text: string): Promise<boolean> => {
    // Method 1: Modern Clipboard API
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (err) {
      console.log('Clipboard API failed, trying fallback');
    }

    // Method 2: execCommand fallback
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
      document.body.appendChild(textArea);
      
      if (isIOS) {
        // iOS specific selection
        const range = document.createRange();
        range.selectNodeContents(textArea);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        textArea.setSelectionRange(0, 999999);
      } else {
        textArea.focus();
        textArea.select();
      }
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      console.error('All clipboard methods failed:', err);
      return false;
    }
  };

  // Download image - optimized for mobile
  const downloadImage = async (): Promise<boolean> => {
    try {
      const response = await fetch(IMAGE_PATH);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      if (isIOS) {
        // iOS: Open image in new tab for long-press save
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        return true;
      }
      
      // Android & Desktop: Trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sendright-2025.png';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 1000);
      
      return true;
    } catch (err) {
      console.error('Download failed:', err);
      return false;
    }
  };

  // Try to open Instagram with multiple methods
  const openInstagram = async () => {
    // Copy link before attempting to open Instagram
    await copyToClipboard(APP_LINK);
    
    if (isIOS) {
      // iOS: Use instagram:// scheme
      window.location.href = 'instagram://library?LocalIdentifier=0';
      
      // Fallback to Instagram web after delay
      setTimeout(() => {
        if (document.visibilityState === 'visible') {
          window.open('https://www.instagram.com/create/story', '_blank');
        }
      }, 1500);
    } else if (isAndroid) {
      // Android: Try multiple methods
      
      // Method 1: Simple instagram scheme (most compatible)
      const opened = tryOpenUrl('instagram://library');
      
      if (!opened) {
        // Method 2: Direct Play Store or Instagram web
        setTimeout(() => {
          if (document.visibilityState === 'visible') {
            window.open('https://www.instagram.com/create/story', '_blank');
          }
        }, 1500);
      }
    } else {
      // Desktop: Open Instagram web
      window.open('https://www.instagram.com/create/story', '_blank');
    }
  };

  // Helper to try opening a URL
  const tryOpenUrl = (url: string): boolean => {
    try {
      window.location.href = url;
      return true;
    } catch {
      return false;
    }
  };

  // Main share handler - prioritizes native share
  const handleShareNow = async () => {
    setStatus('sharing');
    
    // Always copy link first
    await copyToClipboard(APP_LINK);
    
    try {
      const response = await fetch(IMAGE_PATH);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      const file = new File([blob], 'sendright-2025.png', { type: 'image/png' });

      // Check if Web Share API with files is supported
      const canShareFiles = navigator.share && navigator.canShare && navigator.canShare({ files: [file] });
      
      if (canShareFiles) {
        try {
          await navigator.share({
            files: [file],
            title: 'SendRight 2025',
            text: `I type smarter with SendRight AI Keyboard! ${APP_LINK}`,
          });
          setStatus('success');
          showToast('✓ Shared successfully!');
          return;
        } catch (shareErr: any) {
          if (shareErr.name === 'AbortError') {
            setStatus('idle');
            return;
          }
          console.log('Web Share with files failed, trying without files');
        }
      }

      // Try Web Share without files (text only)
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'SendRight 2025',
            text: `I type smarter with SendRight AI Keyboard!`,
            url: APP_LINK,
          });
          // Also download the image for them
          await downloadImage();
          setStatus('success');
          showToast('✓ Link shared! Image also saved for you.');
          return;
        } catch (shareErr: any) {
          if (shareErr.name === 'AbortError') {
            setStatus('idle');
            return;
          }
        }
      }

      // Fallback: Download + Copy
      await handleFallback();
      
    } catch (err) {
      console.error('Share error:', err);
      await handleFallback();
    }
  };

  // Fallback handler - download image and copy link
  const handleFallback = async () => {
    // Run both in parallel for speed
    const [downloadSuccess, copySuccess] = await Promise.all([
      downloadImage(),
      copyToClipboard(APP_LINK)
    ]);
    
    setStatus('downloaded');
    
    // Show appropriate toast message
    if (isIOS) {
      if (copySuccess) {
        showToast('📸 Image opened! Long-press to save. Link copied! ✓');
      } else {
        showToast('📸 Image opened! Long-press to save it.');
      }
    } else if (downloadSuccess && copySuccess) {
      showToast('✓ Image saved & link copied! Open Instagram to share.');
    } else if (downloadSuccess) {
      showToast('📸 Image saved! Open Instagram to share.');
    } else if (copySuccess) {
      showToast('📋 Link copied! Save the image manually.');
    } else {
      showToast('Please try again or screenshot the image above.');
    }
  };

  // Handle button click based on status
  const handleButtonClick = async () => {
    if (status === 'downloaded') {
      // Copy link again before opening Instagram
      await copyToClipboard(APP_LINK);
      showToast('📋 Link copied! Paste it in your story.');
      openInstagram();
    } else {
      handleShareNow();
    }
  };

  // Reset status when modal closes
  const handleClose = () => {
    setStatus('idle');
    setToast({ show: false, message: '' });
    onClose();
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
          onClick={handleClose}
          style={{ willChange: 'opacity' }}
        >
          <div className="min-h-full flex items-center justify-center p-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            style={{ willChange: 'transform, opacity' }}
            className="relative w-full max-w-sm sm:max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto transform-gpu"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
            >
              <HiXMark className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Header */}
            <div className="pt-6 pb-3 px-4 sm:pt-8 sm:pb-4 sm:px-6 text-center">
              <div className="flex justify-center mb-2 sm:mb-3">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <FaInstagram className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
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
              {/* Status Message */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.2, ease: 'easeOut' }}
                className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border ${
                  status === 'success' ? 'bg-green-500/10 border-green-500/30' : 
                  status === 'downloaded' ? 'bg-green-500/10 border-green-500/30' : 
                  'bg-white/5 border-white/10'
                } transition-all`}
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                  status === 'success' ? 'bg-green-500 text-white' : 
                  status === 'downloaded' ? 'bg-green-500 text-white' : 
                  'bg-white/10 text-white/60'
                }`}>
                  {status === 'success' || status === 'downloaded' ? <HiCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : '1'}
                </div>
                <div className="flex-1">
                  <p className={`text-xs sm:text-sm font-medium ${
                    status === 'success' ? 'text-green-400' : 
                    status === 'downloaded' ? 'text-green-400' : 
                    'text-white/80'
                  }`}>
                    {status === 'success' ? 'Shared successfully!' : 
                     status === 'downloaded' ? (isIOS ? 'Image ready! Tap to open Instagram' : 'Image saved & link copied!') : 
                     status === 'sharing' ? 'Opening share menu...' :
                     'Tap to share directly to Instagram Story'}
                  </p>
                  {status === 'downloaded' && (
                    <p className="text-[10px] sm:text-xs text-white/40 mt-0.5">
                      {isIOS ? 'Long-press the image to save it first' : 'Open Instagram and add from gallery'}
                    </p>
                  )}
                </div>
              </motion.div>

              {/* Tip */}
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15, duration: 0.2, ease: 'easeOut' }}
                className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                  <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-white/80">
                    {status === 'downloaded' 
                      ? <>Add image from <span className="text-pink-400">Gallery</span></>
                      : <>Select <span className="text-pink-400">Instagram Stories</span></>
                    }
                  </p>
                  <p className="text-[10px] sm:text-xs text-white/40">
                    {status === 'downloaded'
                      ? 'Paste the link in your story for followers'
                      : 'From the share menu that appears'
                    }
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Share Now Button */}
            <div className="p-4 pt-2 sm:p-6 sm:pt-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleButtonClick}
                disabled={status === 'sharing'}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === 'sharing' ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sharing...
                  </>
                ) : status === 'downloaded' ? (
                  <>
                    <HiArrowDownTray className="w-4 h-4 sm:w-5 sm:h-5" />
                    Open Instagram
                  </>
                ) : (
                  <>
                    <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    Share Now
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
          </div>
        </motion.div>
      )}

      {/* Toast notification */}
      <Toast 
        message={toast.message} 
        isVisible={toast.show} 
        onClose={() => setToast({ show: false, message: '' })} 
      />
    </AnimatePresence>
  );
};

export default ShareStoryModal;
