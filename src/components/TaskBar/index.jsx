import { Clock, QuickActions, StartButton, BarContent } from '..'
import config from '../../config'
import './index.css'

const styles = {
  taskbarContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    bottom: 0,
    width: '100vw',
    height: config.get('taskbar.height') + 'px',
    zIndex: 0,
  },
  taskBar: {
    position: 'absolute',
    backgroundColor: '#BCBEBC',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  taskbarContent: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  taskbarAddOns: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    zIndex: 3,
  },
  clock: {
    display: 'flex',
    justifySelf: 'flex-end',
  },
}

export default function Index() {
  return (
    <div style={styles.taskbarContainer}>
      {config.get('functionalities.taskbar') && (
        <div className="taskbar" style={styles.taskBar} />
      )}
      <div className="content" style={styles.taskbarContent}>
        {config.get('functionalities.startButton') && <StartButton />}
        <div className="add-ons" style={styles.taskbarAddOns}>
          {config.get('functionalities.quickAction') && <QuickActions />}
          {config.get('functionalities.contentWindows') && <BarContent />}
          <div style={styles.clock}>
            {config.get('functionalities.clock') && <Clock />}
          </div>
        </div>
      </div>
    </div>
  )
}
