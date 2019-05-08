<template>
  <q-layout row view="hHh Lpr lff">
    <q-layout-header row>
      <q-toolbar color="tertiary" id="navbar" class="q-pb-none">
        <q-btn flat dense round @click="miniState = !miniState" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-tabs color="tertiary" class="nav-item" v-for="(item, index) in navItems" :key="index">
          <q-route-tab slot="title" :to='item.destination' :label='item.label'></q-route-tab>
        </q-tabs>
        <q-btn-group class="navbar-right q-ml-auto">
          <q-btn label='View As'/>
          <q-btn><img src="../assets/btn_applications_up.svg" alt=""></q-btn>
          <q-btn><img src="../assets/btn_notifications_up.svg" alt=""><span class="counter q-mr-lg q-mb-lg">4</span></q-btn>
          <!-- <q-btn label='name person'></q-btn><q-avatar color="primary" text-color="white">J</q-avatar> -->
        </q-btn-group>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer
      side="left"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
      :mini="miniState"
      :width="width"
    >
      <q-scroll-area class="fit">
        <q-list inset-separator class="q-pt-lg">
          <!-- <q-list-header>
            Menu Items
          </q-list-header> -->
          <q-item v-ripple class="q-pa-md" v-for="item in sideNavItems" :key="item.label" :to="item.path">
            <q-item-side :icon="item.icon"></q-item-side>
            <q-item-main :label="item.label"></q-item-main>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: true,
      tab: '',
      miniState: true,
      width: 200,
      navItems: [
        { destination: '/', label: 'HOME' },
        { destination: '/refferal', label: 'REFFERAL & TSA' },
        { destination: '/assesments', label: 'ASSESMENTS' },
        { destination: '/treatment', label: 'TREATMENT' },
        { destination: '/calender', label: 'CALENDER' },
        { destination: '/analysis', label: 'ANALYSIS' }
      ],
      sideNavItems: [
        { icon: 'assignment_turned_in',
          label: 'ALLOCATION',
          path: '/'
        },
        {
          icon: 'timeline',
          label: 'SUMMARY',
          path: '/summary'
        },
        {
          icon: 'watch_later',
          label: 'SHIFTS',
          path: '/shifts'
        }
      ]
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
@import '~variables'

// #navbar {
//   .nav-item /deep/.bg-primary {
//     background: none !important;
//   }
// }

.q-tab-label
  font-size 14px
  line-height 1.43
  letter-spacing 1.4px
  text-align: left
  color: #ffffff
.navbar-right
  box-shadow none
  font-size 14px
  color: #ffffff
.counter
  background yellow
  border-radius 50%
  color black
  width 20px

.q-tabs-bar
  border: 3px solid #ffdd00;

.q-tab-label {
  font-size: $button-font-size;
  line-height: 1.43;
  letter-spacing: 1.4px;
  text-align: left;
  color: #ffffff;
}
.q-tab
  padding 0

.q-tabs-head
  font-family 400
  font-size 14px

.q-item.active, .q-item.router-link-active, .q-item:focus
  background-color #ffdd00

.q-item
  font-size 14px
  font-weight: 500
  letter-spacing 1.4px

</style>
