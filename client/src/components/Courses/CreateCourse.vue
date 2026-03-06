<template>
  <div>
    <h1>สร้าง Course</h1>

    <p>Title</p>
    <input v-model="course.title" />

    <p>Description</p>
    <input v-model="course.description" />

    <p>Instructor</p>
    <input v-model="course.instructor" />

    <p>Price</p>
    <input v-model="course.price" />

    <p>Duration</p>
    <input v-model="course.duration" />

    <br /><br />

    <button @click="createCourse">Create</button>
  </div>
</template>

<script>
import CourseService from "../../services/CourseService";

export default {
  data() {
    return {
      course: {
        title: "",
        description: "",
        instructor: "",
        price: "",
        duration: "",
      },
    };
  },

  methods: {
    async createCourse() {
      await CourseService.create(this.course);

      this.$router.push("/courses");
    },
  },
};
</script>
