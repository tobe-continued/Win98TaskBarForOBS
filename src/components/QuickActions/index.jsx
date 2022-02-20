import { useState, useEffect } from 'react'
import { Separator, QuickBarIcon } from '..'
import config from '../../config'
import './index.css'

export default function Index() {
  const [infoBulle, setInfoBulle] = useState(0)
  const icons = config.get('taskbar.icons')
  const iconSetWidth =
    10 +
    (config.get('taskbar.icon.size') + config.get('taskbar.icon.spacing')) *
      icons.length

  useEffect(() => {
    const duration = config.get('taskbar.transition.duration')
    const pauseTime = config.get('taskbar.transition.pause-time')
    let timer1 = setTimeout(() => {
      if (infoBulle < icons.length + pauseTime / duration) {
        setInfoBulle(infoBulle + 1)
      } else {
        setInfoBulle(0)
      }
    }, duration * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [icons.length, infoBulle])

  return (
    <div
      className="iconSet"
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        bottom: 0,
        left: config.get('taskbar.quickList.leftPosition') + 'vw',
        maxWidth: iconSetWidth + 'px',
        height: '100%',
        paddingLeft: '10px',
      }}
    >
      <Separator />
      {icons &&
        icons.map((icon, index) => (
          <QuickBarIcon key={index} icon={icon} infoBulle={infoBulle} />
        ))}
    </div>
  )
}
