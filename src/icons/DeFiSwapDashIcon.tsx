import { SvgIcon, SvgIconProps } from '@mui/material'

function DeFiSwapDashIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 64 64" {...props}>
        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="defiswapdashGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4CAF50" />
                    <stop offset="100%" stopColor="#8BC34A" />
                </linearGradient>
            </defs>

            <circle cx="32" cy="32" r="30" fill="url(#defiswapdashGradient)"/>

            <path d="M 20,16 v 32 h 12 q 16,0 16,-16 t -16,-16 h -12 z" fill="#FFFFFF"/>
            
            <path d=" M 48,16 l 6,-4 v 8 z" fill="#FFFFFF"/>
        </svg>
  </SvgIcon>
  )
}

export default DeFiSwapDashIcon;