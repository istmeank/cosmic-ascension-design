// Flag icons as SVG components for better cross-browser compatibility

export const FrenchFlag = ({ className = "w-5 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="10" height="20" fill="#0052B4"/>
    <rect x="10" width="10" height="20" fill="#FFFFFF"/>
    <rect x="20" width="10" height="20" fill="#D80027"/>
  </svg>
);

export const USFlag = ({ className = "w-5 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="20" fill="#B22234"/>
    <rect width="30" height="1.5" y="1.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="4.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="7.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="10.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="13.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="16.5" fill="#FFFFFF"/>
    <rect width="30" height="1.5" y="19.5" fill="#FFFFFF"/>
    <rect width="12" height="10.5" fill="#3C3B6E"/>
  </svg>
);

export const AlgerianFlag = ({ className = "w-5 h-3" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg">
    <rect width="15" height="20" fill="#006633"/>
    <rect x="15" width="15" height="20" fill="#FFFFFF"/>
    <g transform="translate(15,10)">
      <circle r="3" fill="none" stroke="#D21034" strokeWidth="0.5"/>
      <path d="M -1,0 L 0,-2 L 1,0 L 0,1.5 Z" fill="#D21034"/>
    </g>
  </svg>
);