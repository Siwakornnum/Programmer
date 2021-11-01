<template>
  <div>
    <p>Employee</p>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Employee ID</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        v-model="info.employeeID"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >firstName</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        v-model="info.firstName"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >lastName</span
        >
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        v-model="info.lastName"
      />
    </div>
    <!-- <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="Male"
        v-model="info.gender"
      />
      <label class="form-check-label" for="inlineRadio1">Male</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        value="Female"
        v-model="info.gender"
      />
      <label class="form-check-label" for="inlineRadio2">Female</label>
    </div> -->

    <div
      class="form-check form-check-inline"
      v-for="(data, index) in gender"
      v-bind:key="index"
    >
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        :id="index"
        :value="data.value"
        v-model="info.gender"
      />
      <label class="form-check-label" for="inlineRadio2">{{
        data.lable
      }}</label>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >Time In</span
      >
      <b-form-timepicker v-model="info.timeIn" locale="en"></b-form-timepicker>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default"
        >Time Out</span
      >
      <b-form-timepicker v-model="info.timeOut" locale="en"></b-form-timepicker>
    </div>

    <br />
    <button type="button" class="btn btn-success" v-on:click="save">
      save
    </button>
    <br />
    <br />
    <br />
    <!-- <div :hidden="!show">
      <h3>Employee ID : {{ info.employeeID }}</h3>
      <h3>FirstName : {{ info.firstName }}</h3>
      <h3>LastName : {{ info.lastName }}</h3>
      <h3>Gender : {{ info.gender }}</h3>
      <h3>Time : {{ info.timeIn }} - {{ info.timeOut }}</h3>
      <h3>
        Active :
        <span v-if="info.active">Active</span>
        <span v-else>Non Active</span>
      </h3>
    </div> -->

    <!-- <div :hidden="!show" v-for="(data, index) in employeeInfo" :key="index">
      <h3>Employee ID : {{ data.employeeID }}</h3>
      <h3>FirstName : {{ data.firstName }}</h3>
      <h3>LastName : {{ data.lastName }}</h3>
      <h3>Gender : {{ data.gender }}</h3>
      <h3>Time : {{ data.timeIn }} - {{ data.timeOut }}</h3>
      <h3>
        Active :
        <span v-if="data.active">Active</span>
        <span v-else>Non Active</span>
      </h3>
    </div> -->

    <div>
      <b-table striped hover :items="employeeInfo"></b-table>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "employee",
  data() {
    return {
      info: {
        employeeID: null,
        firstName: null,
        lastName: null,
        gender: null,
        timeIn: null,
        timeOut: null,
        active: false,
      },
      show: false,
      gender: [
        {
          lable: "male",
          value: "M",
        },
        {
          lable: "female",
          value: "F",
        },
      ],
      employeeInfo: [],
    };
  },
  methods: {
    save() {
      this.employeeInfo.push(this.info);
      this.checkActiveTime();
      this.show = true;
      //   this.show ? false : true;
      this.info = {
        employeeID: null,
        firstName: null,
        lastName: null,
        gender: null,
        timeIn: null,
        timeOut: null,
        active: false,
      };
    },
    checkActiveTime() {
      const today = new Date();
      const time = moment(today, "HH:mm");
      if (
        moment(this.info.timeIn, "HH:mm").isBefore(moment(time, "HH:mm")) &&
        moment(time).isBefore(moment(this.info.timeOut, "HH:mm"))
      ) {
        this.info.active = true;
      } else {
        this.info.active = false;
      }
    },
  },
};
</script>

<style>
</style>