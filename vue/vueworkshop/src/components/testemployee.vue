<template>
  <div>
    <div id="textStyle">
      <p class="p-3 mb-2 bg-dark text-white">MY TEAM PROJECT</p>
    </div>
    <form class="row g-3 container" id="form">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Firstame</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          v-model="info.firstName"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Lastname</label>
        <input
          type="text"
          class="form-control"
          id="inputPassword4"
          v-model="info.lastName"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">ID Student</label>
        <input
          type="text"
          class="form-control"
          id="inputIdStudent"
          v-model="info.studentID"
        />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Sirname</label>
        <input
          type="text"
          class="form-control"
          id="inputsirname"
          v-model="info.Sirname"
        />
      </div>
      <div class="col-md-2">
        <label for="inputState" class="form-label">Sex</label><br />
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
          <label class="form-check-label" for="inlineRadio1">{{
            data.lable
          }}</label>
        </div>
      </div>

      <div class="col-md-4">
        <label for="inputState" class="form-label">role</label>
        <select id="inputState" class="form-select" v-model="info.role">
          <option selected>Choose...</option>
          <option>Group leader</option>
          <option>Deputy group leader</option>
          <option>Group member</option>
        </select>
      </div>

      <div class="col-12">
        <button type="button" class="btn btn-primary" v-on:click="save">
          Save
        </button>
      </div>
      <div>
        <b-table striped hover :items="employeeInfo"></b-table>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "employee",
  data() {
    return {
      info: {
        studentID: null,
        firstName: null,
        lastName: null,
        Sirname: null,
        gender: null,

        role: null,
      },
      show: false,
      gender: [
        {
          lable: "male",
          value: "Male",
        },
        {
          lable: "female",
          value: "Female",
        },
      ],
      employeeInfo: [],
    };
  },
  methods: {
    save() {
      this.employeeInfo.push(this.info);
      this.show = true;
      //   this.show ? false : true;
      this.info = {
        studentID: null,
        firstName: null,
        lastName: null,
        Sirname: null,
        gender: null,
        role: null,
      };
    },
  },
};
</script>

<style>
#textStyle {
  text-align: center;
}
#form {
  margin-left: auto;
  position: absolute;
  margin-top: auto;
  background-color: rgb(138, 221, 172);
}
</style>