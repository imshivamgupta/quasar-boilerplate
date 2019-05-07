<template>
  <q-layout row view="hHh Lpr lff">
    <q-layout-header row>
      <q-toolbar color="tertiary" id="navbar" class="q-pb-none">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>
        <q-tabs v-model="tab" class="nav-item" v-for="(item , index) in navItems" :key="index">
          <q-tab slot="title" :name="item.name" :label="item.label"/>
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
      :mini="mini"
      @mouseover="mini = false"
      @mouseout="mini = true"
      :width="width"
    >
      <q-scroll-area class="fit">
        <q-list>
          <!-- li list -->
          <q-item clickable v-ripple>
            <q-item-side>
              <q-item-tile>
                <q-icon name="inbox" />
              </q-item-tile>
            </q-item-side>
            <q-item-main >
              <q-item-tile/>
            </q-item-main>
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
      mini: true,
      width: 200,
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
.q-tabs-bar {
  border: 3px solid #ffdd00;
}

.q-tab-label {
  font-size: $button-font-size;
  line-height: 1.43;
  letter-spacing: 1.4px;
  text-align: left;
  color: #ffffff;
}
</style>
