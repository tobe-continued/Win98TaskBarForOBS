import { useState, useEffect } from 'react'
import { Separator } from '..'
import './index.css'
import moment from 'moment'

export default function Index() {
  const date = moment().local('fr-FR').format('DD/MM/YYYY')
  const [hour, setHour] = useState(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(moment().local('fr-FR').format('HH:mm'))
    }, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="clock"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifySelf: 'flex-end',
        alignSelf: 'center',
        height: '100%',
      }}
    >
      <Separator />
      <div
        className="text-clock"
        style={{
          display: 'flex',
          marginLeft: '8px',
          marginRight: '16px',
          flexDirection: 'column',
        }}
      >
        <span>{hour}</span>
        <span>{date}</span>
      </div>
    </div>
  )
}
