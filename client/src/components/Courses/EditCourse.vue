<template>
  <div>
    <h1>แก้ไข Course</h1>

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

    <button @click="updateCourse">Update</button>
  </div>
</template>

<script>
import CourseService from "../../services/CourseService";

export default {
  data() {
    return {
      course: {},
    };
  },

  async created() {
    let courseId = this.$route.params.courseId;

    this.course = (await CourseService.show(courseId)).data;
  },

  methods: {
    async updateCourse() {
      await CourseService.update(this.course);

      this.$router.push("/courses");
    },
  },
};
</script>
