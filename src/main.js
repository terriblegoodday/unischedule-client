// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// MARK: -Imports
import Vue from 'vue'
import VueApollo from 'vue-apollo'
import gql from 'graphql-tag'
import VueProgressBar from 'vue-progressbar'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './App'
import VueInputDropdown from 'vue-input-dropdown'

// MARK: -Apollo Client
Vue.use(VueApollo)
Vue.use(VueInputDropdown)
Vue.config.productionTip = false

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const cache = new InMemoryCache()

const typeDefs = gql`
  extend type Class {
    formattedType: String
    time: String
  }
`

const resolvers = {
  Class: {
    formattedType: (parent) => {
      let typeDict = {
        'LECTURE': 'Лекция',
        'LAB': 'Лабораторные занятия',
        'PRACTICE': 'Практические занятия',
        'SEMINAR': 'Семинар'
      }
      console.log(parent)
      if (parent !== undefined || parent != null) {
        if (parent.type != null) return typeDict[parent.type]
      }
      return ''
    },
    time: (parent) => {
      let timeDict = {
        '0': '08:30 – 10:00',
        '1': '10:10 – 11:40',
        '2': '11:50 – 13:20',
        '3': '13:30 – 15:00',
        '4': '15:10 – 16:40',
        '5': '16:50 – 18:30',
        '6': '18:40 – 20:20',
        '7': '20:30 – 22:00'
      }
      return timeDict[parent.number]
    }
  }
}

const client = new ApolloClient({
  connectToDevTools: true,
  link: httpLink,
  cache,
  typeDefs,
  resolvers
})

const apolloProvider = new VueApollo({
  defaultClient: client
})

// MARK: -UI
Vue.use(VueProgressBar, {
  autoFinish: false
})

// MARK: -Vue Init
/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  components: { App },
  template: '<App/>'
})
