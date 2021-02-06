<template>
  <div class="column is-full">
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Shift</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="is-fullwidth">
              <v-select :options="[{label: 'Canada', code: 'ca'}]" v-model="shift"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Specific Time interval</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="is-fullwidth">
              <v-select :options="[{label: 'Canada', code: 'ca'}]" v-model="durationShift" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Group</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <div class="is-fullwidth">
              <v-select :options="[{label: 'Canada', code: 'ca'}]" v-model="group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      shift: null,
      durationShift: null,
      group: null,
      time: null,
    }
  }
}
</script>

<style scoped>

</style>