<template>
  <q-layout row view="lHh Lpr lFf">
    <q-layout-header row>
      <q-toolbar color="tertiary" id="navbar">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-tabs class="nav-item" v-for="(item , index) in navItems" :key="index">
          <q-tab slot="title" :name="item.name" :label="item.label"/>
        </q-tabs>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    ></q-layout-drawer>

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
      leftDrawerOpen: this.$q.platform.is.desktop,
      navItems: [
        { name: 'home', label: 'HOME' },
        { name: 'refferalAndTsa', label: 'REFFERAL & TSA' },
        { name: 'assesments', label: 'ASSESMENTS' },
        { name: 'treatment', label: 'TREATMENT' },
        { name: 'calender', label: 'CALENDER' },
        { name: 'analysis', label: 'ANALYSIS' }
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
#navbar
  .nav-item /deep/.bg-primary
    background: none !important;

.q-tabs-bar
  border: 3px solid #ffdd00;

.q-tab-label
  font-size 14px
  // line-height: 1.43;
  // letter-spacing: 1.4px;
  text-align: left
  color: #ffffff

</style>
