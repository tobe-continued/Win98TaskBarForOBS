import { BarItem, Separator } from '..';
import config from '../../config';
import './index.css';

export default function Index() {
    return (
        <div className="barContent" style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        }}>
            <Separator />
            {config.get('taskbar.windows').map(({icon, name}, index) => (
                <BarItem key={index} name={name} icon={icon} />
            ))}
        </div>
    );
}