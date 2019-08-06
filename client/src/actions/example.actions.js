import store from '../store'
import axios from 'axios'

export function greet() {
  axios.get('/api/greeting').then(resp => {
    store.dispatch({
      type: 'GREETING',
      payload: resp.data.greeting
    })
  })
}