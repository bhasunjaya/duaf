import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Biodata from '../views/Biodata'
import Canvas from '../views/Canvas'
import FlavorDescription from '../views/FlavorDescription'
import FlavorForm from '../views/FlavorForm'
import FlavorFormGenerator from '../views/FlavorFormGenerator'
import Gallery from '../views/Gallery'
import Success from '../views/Success'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        { path: '/', component: Home },
        { path: '/Biodata', component: Biodata },
        { path: '/Canvas', component: Canvas },
        { path: '/FlavorDescription', component: FlavorDescription },
        { path: '/FlavorForm', component: FlavorForm },
        { path: '/Gallery', component: Gallery },
        { path: '/Success', component: Success },
        { path: '/FlavorFormGenerator', component: FlavorFormGenerator },
    ]
})
