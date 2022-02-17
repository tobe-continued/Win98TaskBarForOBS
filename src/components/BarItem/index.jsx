import './index.css';

const styles = {
    barItem: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: '0px',
        marginRight: '8px',
        paddingLeft: '4px',
        paddingRight: '4px',
        borderRadius: '2px',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: '400',
        height: 'calc(100% - 18px)',
        width: '14%',
        backgroundColor: 'transparent',
        color: '#000000',
    },
    barIcon: {
        height: '100%',
        margin: '2px',
        objectPosition: 'center',
    },
    text: {
        marginLeft: 5,
    }
};

export default function Index({ name, icon }) {
    return (
        <div className="bar-item" style={styles.barItem}>
            {icon && (
                <img src={icon} alt={'icon'} style={styles.barIcon} />
            )}
            {name && (
                <div style={styles.text}>{name} :</div>
            )}
        </div>
    );
}