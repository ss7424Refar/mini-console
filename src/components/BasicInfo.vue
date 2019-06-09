<template>
  <div>
    <b-container-fluid>
      <b-row>
        <b-col md="6">
          <b-button block variant="primary">CPU</b-button>
          <hr>
          <b-row>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-alert show variant="warning">Warning Alert</b-alert>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <b-button block variant="primary">MEMORY</b-button>
          <hr>
          <b-row>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
            <b-col md="3"><b-alert show variant="primary">CPU</b-alert></b-col>
          </b-row>
          <b-row>
            <b-col md="12">
              <b-alert show variant="warning">Warning Alert</b-alert>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <!--第二排-->
      <b-row>
        <b-col md="3">
          <b-button block variant="primary">CPU</b-button>
          <b-row>
            <b-col md="6"></b-col>
            <b-col md="6"></b-col>
          </b-row>
        </b-col>
        <b-col md="3">
          <b-button block variant="primary">CPU</b-button>
        </b-col>
        <b-col md="3">
          <b-button block variant="primary">CPU</b-button>
        </b-col>
        <b-col md="3">
          <b-button block variant="primary">CPU</b-button>
        </b-col>
      </b-row>

    </b-container-fluid>

  </div>
</template>

<script>
  export default {
      name: "BasicInfo"
  }
</script>

<style scoped>

</style>
