import React from 'react'

const HexagonalSvg = ({accentColor}) => {
  return (
     <div className="absolute inset-0  opacity-10 group-hover:opacity-15 transition-opacity duration-300">
        <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id={`hexPattern${accentColor.replace(/[^a-zA-Z0-9]/g, '')}`} x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              {/* Central hexagon */}
              <path d="M30 4 L45 13 L45 30 L30 39 L15 30 L15 13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Offset row hexagons */}
              <path d="M0 30 L15 39 L15 56 L0 65 L-15 56 L-15 39 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M60 30 L75 39 L75 56 L60 65 L45 56 L45 39 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Top row partial hexagons */}
              <path d="M-15 -22 L0 -13 L0 4 L-15 13 L-30 4 L-30 -13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M45 -22 L60 -13 L60 4 L45 13 L30 4 L30 -13 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              
              {/* Bottom row partial hexagons */}
              <path d="M-15 56 L0 65 L0 82 L-15 91 L-30 82 L-30 65 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
              <path d="M45 56 L60 65 L60 82 L45 91 L30 82 L30 65 Z" stroke="currentColor" strokeWidth="1" fill="none" className={accentColor} />
            </pattern>
          </defs>
          
          {/* Apply the hexagonal pattern to fill the entire background */}
          <rect width="100%" height="100%" fill={`url(#hexPattern${accentColor.replace(/[^a-zA-Z0-9]/g, '')})`} />
        </svg>
      </div>
  )
}

export default HexagonalSvg