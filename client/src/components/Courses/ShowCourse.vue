<template>
  <div>
    <h1>Course Detail</h1>

    <p>Title: {{ course.title }}</p>
    <p>Description: {{ course.description }}</p>
    <p>Instructor: {{ course.instructor }}</p>
    <p>Price: {{ course.price }}</p>
    <p>Duration: {{ course.duration }}</p>
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
};
</script>
