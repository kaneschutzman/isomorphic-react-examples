import Iso from 'iso'
import Router from 'react-router'
import React from 'react'
import routes from './src/routes'
import alt from './src/alt'

/* 
  Once we bootstrap the stores, we run react-router using Router.HistoryLocation
  The element is created and we just render it into the container
*/

Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state)

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    let node = React.createElement(Handler)
    React.render(node, container)
  })
})