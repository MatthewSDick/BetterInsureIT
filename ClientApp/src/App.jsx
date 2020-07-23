import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { MeetTheTeam } from './pages/MeetTheTeam'
import Plans from './pages/Plans'
import NotFound from './pages/NotFound'
import './custom.scss'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plans" component={Plans} />
        <Route exact path="/MeetTheTeam" component={MeetTheTeam} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    )
  }
}
