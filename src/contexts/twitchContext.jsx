/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useMemo, useState } from 'react'
import config from '../config'
import Twitch from '../utils/twitch'

const TwitchContext = createContext({
  loadingToken: true,
  token: null,
})

const TwitchProvider = (props) => {
  const [loadingToken, setLoadingToken] = useState(true)
  const [token, setToken] = useState(null)
  const [listenerActive, setListenerActive] = useState(false)

  const value = useMemo(() => ({
    token,
    setToken,
    loadingToken,
    setLoadingToken,
    listenerActive,
    setListenerActive,
  }))
  const scope = config
    .get('twitch.api.scopes')
    .filter((data) => data.value === true)
    .map((data) => data.scope)
    .join(' ')

  useEffect(() => {
    if (!listenerActive) {
      Twitch.auth
        .connect(
          {
            client_id: config.get('twitch.api.client_id'),
            client_secret: config.get('twitch.api.client_secret'),
            grant_type: 'client_credentials',
            scope,
          },
          {
            Accept: 'application/json',
          }
        )
        .then((data) => {
          if (data) {
            setToken(data.access_token)
          } else {
            setToken(null)
          }
          setLoadingToken(false)
          setListenerActive(true)
        })
    }
  }, [listenerActive])

  return (
    <TwitchContext.Provider value={value}>
      {props.children}
    </TwitchContext.Provider>
  )
}

export default TwitchContext
export { TwitchProvider }
