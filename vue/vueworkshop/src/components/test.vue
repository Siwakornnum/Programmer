<template>
  <div id="test" class="color">
    v-model
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">user</span>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="usrName"
      />
    </div>
    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">password</span>
      <input
        type="text"
        class="form-control"
        placeholder="password"
        aria-label="password"
        aria-describedby="basic-addon1"
        v-model="usrPass"
      />
    </div>

    <div class="input-group-prepend">
      <span class="input-group-text" id="basic-addon1">color</span>
      <input
        type="text"
        class="form-control"
        placeholder="color"
        aria-label="color"
        aria-describedby="basic-addon1"
        v-model="usrcolor"
      />
    </div>

    <div v-bind:style="{ 'background-color': usrcolor }">
      shown <br />
      user : {{ usrName }} <br />
      password : {{ usrPass }} <br />color : {{ usrcolor }}
    </div>

    <!-- <div class="card">
      <div class="class=header">
        ชื่อ : {{ myInfo.myName }}
        <button type="button" class="btn btn-info" @click="myShownInfo">
          {{ labelButton }}
        </button>
      </div>
      <div class="class=body" :hidden="!hideShown">
        NickName : {{ myInfo.myNickName }} <br />
        StudentId :{{ myInfo.myStudentId }}
      </div>
    </div> -->
    <!-- v-on v-bind
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="alertMsg('D', 'F', $event)"
    >
      Click me</button
    ><br />
    <button type="button" class="btn btn-secondary" v-on:dblclick="alertMsg">
      Click me</button
    ><br /> -->

    <!-- <p>Hello World</p>
    <p>{{ shown }}</p>
    <img v-bind:src="url" width="50%" height="50%" />
    <img :src="url" width="50%" height="50%" />
    fname : {{ fName }}<br />
    <span /> celsius : {{ celsius }}<br />
    <span /> fahrenheit : {{ fahrenheit }} -->
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      fName: "Lukaku2",
      imgName: "Lukaku",
      url: "",
      color: "tmp2",
      celsius: 30,
      dataPumu: ["หัว", "ก้อย"],
      text: "click",

      myInfo: {
        myName: "Siwa Kornnum",
        myNickName: "Por",
        myStudentId: "6130203578",
      },
      hideShown: true,

      usrName: null,
      usrPass: null,
      usrcolor: null,
    };
  },
  computed: {
    fahrenheit() {
      let result = this.celsius + 1.8 * 32;
      return result;
    },
    random() {
      return Math.random() > 0.5 ? 1 : 0;
    },
    shown() {
      return this.dataPumu[this.random];
    },
    labelButton() {
      return this.hideShown ? "Hide" : "Shown";
    },
    color1() {
      return this.usrcolor;
    },
  },
  methods: {
    alertMsg(p1, p2, e) {
      alert(`You ${e.type} thx button at ${e.clientX}, ${e.clientY}`);
      alert(`paeametor : ${p1} , ${p2}`);
    },
    alertMsg1() {
      console.log("Siwa kornnum");
    },
    myShownInfo() {
      this.hideShown = !this.hideShown;
    },
  },
};
</script>

<style>
.tmp {
  background-color: green;
}
.tmp2 {
  background-color: aquamarine;
}
</style>