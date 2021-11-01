<template >
  <div>
    <h1>Search Page</h1>

    <div>
      <b-table :items="studentInfo"></b-table>
    </div>

    <div>
      <button type="button" class="btn btn-info" v-on:click="back">Back</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "Page1",
  data() {
    return {
      studentInfo: [],
    };
  },
  mounted() {
    axios
      .get("https://mocki.io/v1/423b4c07-dc19-4a17-94f8-fd8d2b0484b8")
      .then((res) => {
        const info = res.data;
        this.studentInfo = info.filter(
          (info) =>
            info.id.includes(this.$route.params.id) |
            info.gender.includes(this.$route.params.id) |
            info.Fname.includes(this.$route.params.id) |
            info.Lname.includes(this.$route.params.id) |
            info.lv.includes(this.$route.params.id)
        );
      });
  },

  methods: {
    back() {
      window.location.href = "http://localhost:8080/";
    },
  },
};
</script>
<style >
</style>