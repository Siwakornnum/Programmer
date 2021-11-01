<template >
  <div id="bcolor">
    <form @submit="checkform">
      <br />
      <input
        type="text"
        v-model="id"
        placeholder="ID"
        style="margin-right: 10px"
      />
      <input type="checkbox" v-model="gender" value="Male" /> Male
      <input type="checkbox" v-model="gender" value="Female" /> Female
      <br />
      <br />
      <input
        type="text"
        v-model="Fname"
        placeholder="Firstname"
        style="margin-right: 10px"
      />
      <input
        type="text"
        v-model="Lname"
        placeholder="Lastname"
        style="margin-right: 10px"
      />

      <!-- <textarea v-model="introduce" placeholder="Introduce yourself"></textarea> -->
      <br />
      <!-- <input type="radio" id="one" value="one" v-model="picked" />จบแล้ว
      <input type="radio" id="two" value="two" v-model="picked" />ยังไม่จบ
      <br /> -->
      <br />
      <select v-model="selected">
        <option value="">Select</option>
        <option
          v-for="option in options"
          :key="option"
          v-bind:value="option.lv"
        >
          {{ option.text }}
        </option>
      </select>
      <br />
      <br />
      <input type="submit" value="ค้นหา" />

      <br /><br />
      <button type="button" class="btn btn-primary" v-on:click="allTable">
        ข้อมูลทั้งหมด
      </button>
      <br />
    </form>
    <br />
  </div>
</template>

<script>
import Router from "vue-router";
const router = new Router({
  mode: "history",
});
export default {
  name: "Student",
  data() {
    return {
      id: null,
      gender: [],
      Fname: null,
      Lname: null,
      introduce: null,
      picked: null,
      selected: "",
      options: [
        { text: "lv 1", lv: "1" },
        { text: "lv 2", lv: "2" },
        { text: "lv 3", lv: "3" },
        { text: "lv 4", lv: "4" },
      ],
      conditions: [],
    };
  },

  methods: {
    checkform(e) {
      if (this.id) {
        router.push(`/page1/${this.id}`);
        router.go();
      } else if (this.gender) {
        router.push(`/page1/${this.gender}`);
        router.go();
      }
      if (this.Fname) {
        router.push(`/page1/${this.Fname}`);
        router.go();
      } else if (this.Lname) {
        router.push(`/page1/${this.Lname}`);
        router.go();
      }
      if (this.selected) {
        router.push(`/page1/${this.selected}`);
        router.go();
      }

      e.preventDefault();
    },

    allTable() {
      router.push(`/page2/${this.id}`);
      router.go();
    },
  },
};
</script>
<style >
#bcolor {
  background-color: rgb(50, 133, 91);
}
</style>