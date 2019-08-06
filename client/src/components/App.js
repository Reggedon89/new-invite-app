import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Button from './Button'
import Greeting from './Greeting'

export default props => {
  return (
    <Provider store={store}>
      <div>
        <Button />
        <Greeting />
      </div>
    </Provider>
  )
}