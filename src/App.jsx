/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react'
import { moment, now } from './utils/core'
import './App.css'
import { TaskBar } from './components'
import Twitch from './utils/twitch'
import config from './config'
import TwitchContext from './contexts/twitchContext'
import { borderRadius, height, textAlign } from '@mui/system'
/* */
moment.locale('fr')
/* */
export const App = () => {
  const { token, loadingToken } = useContext(TwitchContext)
  const [broadcaster, setBroadcaster] = useState(undefined)
  /* */
  useEffect(() => {
    const fetch = async () => {
      Twitch.auth
        .validate(null, { Authorization: 'Bearer ' + token })
        .then(async () => {
          Twitch.api
            .getUsers(token, ['tobe_continued'])
            .then((response) => response && setBroadcaster(response.data[0]))
        })
    }
    if (token && !broadcaster) {
      fetch()
    }
  }, [token])
  /* */
  if (loadingToken || !broadcaster) {
    return null
  }
  /* */
  const today = moment(now())
  const {
    broadcaster_type,
    created_at,
    description,
    display_name,
    id,
    login,
    offline_image_url,
    profile_image_url,
    type,
    view_count,
  } = broadcaster
  /* */
  return (
    <div className="App">
      {token && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              paddingTop: 25,
              alignSelf: 'center',
            }}
          >
            <div>Token : {token && token.split('').map((t) => '*')}</div>
            <div>
              Expire le :{' '}
              {token &&
                today
                  .add(token.expires_in * 1000, 'millisecond')
                  .format('DD MMMM YYYY hh:mm a')}
            </div>
          </div>
          <div
            style={{
              paddingTop: 25,
              alignSelf: 'center',
              textAlign: 'center',
              width: '25vw',
            }}
          >
            {profile_image_url && (
              <img
                src={profile_image_url}
                style={{ borderRadius: '50%', height: 100 }}
              />
            )}
            {display_name && <div>{display_name}</div>}
            {description && <div>{description}</div>}
          </div>
        </div>
      )}
      <TaskBar />
    </div>
  )
}
