<template>
  <div id="courseScient">
    <h1>course scient has : {{ course }}</h1>
    <h2>course Name : {{ nCourse1 }}</h2>
    <h2>course Name : {{ nCourse2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "faculty1",
  data() {
    return {
      course: 7,
      nCourse1: "สาขาวิชาเทคโนโลยีสารสนเทศ",
      nCourse2: "สาขาวิชาวิทยาการคอมพิวเตอร์",
    };
  },
};
</script>

<style>
</style>