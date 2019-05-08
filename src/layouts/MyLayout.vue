<template>
  <q-layout row view="hHh Lpr lff">
    <q-layout-header row>
      <q-toolbar color="tertiary" id="navbar" class="q-pb-none">
        <q-btn flat dense round @click="miniState = !miniState" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-tabs class="nav-item" v-for="(item, index) in navItems" :key="index">
        <q-route-tab exact slot="title" :to='item.destination' :label='item.label'></q-route-tab>
        </q-tabs>
      <q-btn-group class="navbar-right q-ml-auto">
        <q-btn label='View As'/>
        <q-btn><img src="../assets/btn_applications_up.svg" alt=""></q-btn>
        <q-btn><img src="../assets/btn_notifications_up.svg" alt=""><span class="counter q-mr-lg">4</span></q-btn>
      </q-btn-group>
      <q-btn-dropdown label="Some Name">

      </q-btn-dropdown>
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
          <q-item v-ripple to="/" class="q-pa-md">
            <q-item-side icon="assignment_turned_in"></q-item-side>
            <q-item-main label="ALLOCATION"></q-item-main>
          </q-item>
          <q-item v-ripple class="q-pa-md">
            <q-item-side icon="timeline"></q-item-side>
            <q-item-main label="SUMMARY"></q-item-main>
          </q-item>
          <q-item v-ripple class="q-pa-md">
            <q-item-side icon="watch_later"></q-item-side>
            <q-item-main label="SHIFTS"></q-item-main>
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
      ]
      // model: 'one'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">

#navbar {
  .nav-item /deep/.bg-primary {
    background: none !important;
  }
}

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
.q-item.active, .q-item.router-link-active, .q-item:focus
  background-color #ffdd00

.q-item
  font-size 14px

</style>
