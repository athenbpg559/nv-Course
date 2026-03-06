<template>
  <div>
    <h1>Get all courses</h1>

    <button @click="$router.push('/course/create')">สร้าง Course</button>

    <div v-for="course in courses" :key="course.id">
      <p>title: {{ course.title }}</p>
      <p>description: {{ course.description }}</p>
      <p>instructor: {{ course.instructor }}</p>
      <p>price: {{ course.price }}</p>
      <p>duration: {{ course.duration }}</p>

      <button @click="$router.push('/course/' + course.id)">
        ดูข้อมูล Course
      </button>

      <button @click="$router.push('/course/edit/' + course.id)">
        แก้ไข Course
      </button>

      <button @click="deleteCourse(course.id)">ลบข้อมูล Course</button>

      <hr />
    </div>
  </div>
</template>

<script>
import CourseService from "../../services/CourseService";

export default {
  data() {
    return {
      courses: [],
    };
  },

  async created() {
    this.courses = (await CourseService.index()).data;
  },

  methods: {
    async deleteCourse(id) {
      let confirmDelete = confirm("ต้องการลบข้อมูลหรือไม่?");

      if (confirmDelete) {
        await CourseService.delete(id);

        this.courses = (await CourseService.index()).data;
      }
    },
  },
};
</script>
