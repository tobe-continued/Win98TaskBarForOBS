/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import axios from 'axios'
import TwitchContext from '../contexts/twitchContext'
import config from '../config'

const apiAuth = axios.create({
  baseURL: `${config.get('twitch.api.uri')}/oauth2`,
})
const apiInstance = axios.create({
  baseURL: `${config.get('twitch.api.api_url')}/helix`,
})

const auth = (method, url, options) =>
  apiAuth({
    url,
    method,
    ...options,
  })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error)
    })

const api = (method, url, options) =>
  apiInstance({ url, method, ...options })
    .then((res) => res.data)
    .catch((error) => {
      console.error(error)
    })

export default {
  auth: {
    connect: (data, headers) => auth('POST', '/token', { data, headers }),
    validate: (data, headers) => auth('GET', '/validate', { data, headers }),
  },
  api: {
    getUsers: (token, search = []) =>
      api(
        'GET',
        `/users?${search
          .map((value) =>
            typeof value === 'number' ? `id=${value}` : `login=${value}`
          )
          .join('&')}`,
        {
          params: null,
          headers: {
            'Client-ID': config.get('twitch.api.client_id'),
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    get: (url, params, headers) => api('GET', url, { params, headers }),
    post: (url, data, headers) => api('POST', url, { data, headers }),
    put: (url, data, headers) => api('PUT', url, { data, headers }),
    delete: (url, params, headers) => api('DELETE', url, { params, headers }),
  },
}
