import Api from "./Api"

export default {

  // ดึงข้อมูล Course ทั้งหมด
  index() {
    return Api().get('courses')
  },

  // ดึงข้อมูล Course รายการเดียว
  show(courseId) {
    return Api().get('course/' + courseId)
  },
  
  // สร้าง Course ใหม่
  create(course) {
    return Api().post('course', course)
  },

  // แก้ไข Course
  update(course) {
    return Api().put('course/' + course.id, course)
  },

  // ลบ Course
  delete(courseId) {
    return Api().delete('course/' + courseId)
  }

}