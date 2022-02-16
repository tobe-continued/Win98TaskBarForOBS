import './index.css';
import config from '../../config';

export default function Index({key, icon, infoBulle}) {
  return (
    <div className="icon" style={{
      height: 'calc(100% - 18px)',
      width: '100%',
      marginRight: '4px',
    }}>
      {icon.id === infoBulle && (
        <div className='tooltip' style={{
          position: 'absolute',
          maxHeight: '50px',
          paddingBottom: 10,
          bottom: 50,
          paddingInline: 18,
          paddingBlock: 9,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 5,
          backgroundColor: config.get('taskbar.colors.infoBulle')
        }}>{icon.desc}</div>
      )}
      <img style={{
        height: '100%',
        backgroundPosition: 'center',
        objectFit: 'cover'
      }} alt={''} src={icon.file} />
    </div>
  )
}