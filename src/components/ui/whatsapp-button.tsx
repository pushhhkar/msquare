'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Official WhatsApp phone number — digits only, with country code
const WHATSAPP_NUMBER = '919870202444'
const PREFILLED_MESSAGE = encodeURIComponent(
  'Hi MSquare! I visited your website and would like to know more about your services.'
)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PREFILLED_MESSAGE}`

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-[150] flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            role="tooltip"
            id="whatsapp-tooltip"
            className="pointer-events-none select-none whitespace-nowrap bg-zinc-900 border border-zinc-800 text-white text-xs font-medium px-3.5 py-2 rounded-lg shadow-lg"
          >
            Chat with us on WhatsApp
            {/* Arrow */}
            <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-zinc-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <div className="relative">
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" aria-hidden="true" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping [animation-delay:0.4s]" aria-hidden="true" />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MSquare Professionals on WhatsApp"
          aria-describedby="whatsapp-tooltip"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
          style={{ backgroundColor: '#25D366' }}
        >
          {/* WhatsApp SVG icon — official shape */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 175.216 175.552"
            className="w-7 h-7"
            aria-hidden="true"
            fill="white"
          >
            <path d="M87.609 0C39.222 0 0 39.222 0 87.609c0 15.228 3.953 30.043 11.474 43.108L.394 174.808a3.493 3.493 0 0 0 4.35 4.35l44.09-11.08C61.9 175.57 74.6 175.216 87.609 175.216c48.387 0 87.607-39.218 87.607-87.607C175.216 39.222 135.996 0 87.609 0zm0 160.216c-12.59 0-24.909-3.463-35.599-10.016l-2.552-1.525-26.422 6.635 6.635-26.42-1.526-2.554C21.52 116.144 17.5 102.067 17.5 87.609 17.5 48.591 48.591 17.5 87.609 17.5c39.016 0 70.107 31.091 70.107 70.109s-31.091 70.107-70.107 70.107zm38.447-52.6c-2.1-1.05-12.428-6.137-14.353-6.836-1.924-.697-3.323-1.05-4.722 1.05-1.4 2.1-5.421 6.836-6.645 8.236-1.224 1.4-2.448 1.574-4.547.524-2.1-1.05-8.863-3.267-16.882-10.432-6.238-5.571-10.45-12.447-11.673-14.546-1.225-2.1-.13-3.234.92-4.28 1.046-1.048 2.1-2.449 3.148-3.673 1.05-1.225 1.4-2.1.7-3.5s-4.72-11.375-6.47-15.574c-1.7-4.1-3.44-3.55-4.72-3.617l-4.023-.072c-1.4 0-3.673.524-5.597 2.623-1.924 2.1-7.344 7.185-7.344 17.524s7.52 20.32 8.57 21.72c1.05 1.4 14.795 22.593 35.84 31.68 5.006 2.162 8.913 3.45 11.962 4.417 5.025 1.598 9.601 1.374 13.22.833 4.03-.602 12.427-5.083 14.177-9.993 1.748-4.91 1.748-9.12 1.223-9.993-.522-.874-1.922-1.398-4.023-2.452z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  )
}
