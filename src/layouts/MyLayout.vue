<template>
    <q-layout view="hHh Lpr lff" container style="height: 600px;" class="shadow-2 rounded-borders">
      <div class="q-gutter-y-md column">
        <q-toolbar class="bg-black shadow-2 rounded-borders">
          <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer != drawer"></q-btn>
          <q-btn stretch flat label="HOME"></q-btn>
          <q-btn stretch flat label="REFERRAL & TSA"></q-btn>
          <q-btn stretch flat label="ASSESMENTS"></q-btn>
          <q-btn stretch flat label="TREATMENT"></q-btn>
          <q-btn stretch flat label="CALENDER"></q-btn>
          <q-btn stretch flat label="ANALYSIS"></q-btn>
          <q-tabs>
            <q-tab class="bg-dark " slot="title" name="tab-1" label="HOME" ></q-tab>
          </q-tabs>
        </q-toolbar>
      </div>
    </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      drawer: true,
      miniState: true
    }
  }
}
</script>

<style>
</style>
