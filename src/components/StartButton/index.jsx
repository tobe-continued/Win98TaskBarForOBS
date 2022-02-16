import './index.css';
import config from '../../config';

const styles = {
  startButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: '8px',
    paddingLeft: '4px',
    paddingRight: '4px',
    borderRadius: '2px',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '800',
    height: 'calc(100% - 18px)',
    backgroundColor: 'transparent',
    color: '#000000',
  },
  startPicture: {
    height: '100%',
    margin: '2px',
    objectPosition: 'center',
  }
}

export default function Index() {
  return (
      <div className="start-button" style={styles.startButton}>
          <div className="start-button-after">
          </div>
          <img src={'images/logo.png'} alt={''} style={styles.startPicture} />
          <div>{config.get('taskbar.title')}</div>
      </div>
  )
}