import React, {useState} from 'react'
import "../style/tip.scss"
const TipInfo = () => {
    const [showTip, setShowTip] = useState(false);
    const showtip = {
        opacity:"1", 
        pointerEvents: "auto"
    }
  return (
    <div className="tip" onClick={()=> setShowTip(!showTip)}>
        <span className="i">i</span>
        <div className="data" style={showTip ? showtip : null }>
            <div>
                <span>Cover:</span>
                <span><a target="_blank" href="https://www.instagram.com/p/CUfqRRtgIeI/?igshid=YmMyMTA2M2Y=" rel="noopener noreferrer">@pixelwebworks</a></span>
            </div>
            <div>
                <span>Model:</span>
                <span><a target="_blank" href="https://skfb.ly/6SLus" rel="noopener noreferrer">Kyoto Cityscene: Restaurant By Mikail Karaca</a></span>
            </div>
            <div>
                <span>Technology:</span>
                <span>React Hook THREE.js GSAP.js SCSS</span>
            </div>
            <div>
                <span>Create:</span>
                <span>2021/10</span>
            </div>
        </div>
    </div>
  )
}

export default TipInfo