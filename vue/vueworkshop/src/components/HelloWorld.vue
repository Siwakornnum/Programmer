<template>
  <div id="hello">
    <h1>My Profile</h1>
    <h2>name : {{ myName + 90 }}</h2>
    <h3>id : {{ id }}</h3>
    <p>tel : {{ tel }}</p>
    <button type="button" class="btn btn-primary">Click me</button>
    <i class="fab fa-accusoft"></i>
    <!-- <b-card>
    </b-card-title
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: "helloxx",
  data() {
    return {
      myName: 9,
      tel: "0825530898",
      id: "6130203578",
    };
  },
};
</script>

<style>
.test {
  font-size: 9 em;
}
#hello {
  background-color: bisque;
}
</style>