import React from 'react'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'
import { instance as user } from '../lib/user'
import notify from '../lib/notify'

import Layout from './layout/master'
import noMatch from './noMatch'

import UserLogin from '../packages/user/components/login'
import UserRegister from '../packages/user/components/register'

import Breeze from '../packages/breeze/components/index'

function requireAuth (nextState, replace) {
    if ( ! user.isLoggedIn) return replace ('/auth/login')
    if ( ! user.isActive) {
        notify.error('Account not activated.')
        return replace('/auth/login')
    }
}

function isAuthenticated(nextState, replace) {
    if (user.isLoggedIn && user.isActive) return replace('/')
}

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRedirect to="map" />

            <Route path="map" component={Breeze} onEnter={requireAuth} />
            <Route path="auth/login" component={UserLogin} onEnter={isAuthenticated} />
            <Route path="auth/register" component={UserRegister} onEnter={isAuthenticated} />

            <Route path="*" component={noMatch} />
        </Route>
    </Router>
)
