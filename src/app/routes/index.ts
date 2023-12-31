import express from 'express';
import { academicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.routes';
import { adminRoutes } from '../modules/Admin/admin.routes';
import { authRoutes } from '../modules/Auth/auth.routes';
import { buildingRoutes } from '../modules/Building/building.routes';
import { courseRoutes } from '../modules/Course/course.routes';
import { facultyRoutes } from '../modules/Faculty/faculty.routes';
import { managementDepartmentRoutes } from '../modules/ManagementDepartment/managementDepartment.routes';
import { offeredCourseRoutes } from '../modules/OfferedCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../modules/OfferedCourseClassSchedule/offeredCourseClassSchedule.routes';
import { offeredCourseSectionRoutes } from '../modules/OfferedCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../modules/Room/room.routes';
import { semesterRegistrationRoutes } from '../modules/SemesterRegistration/semesterRegistration.routes';
import { studentRoutes } from '../modules/Student/student.routes';
import { studentEnrolledCourseRoutes } from '../modules/StudentEnrolledCourse/studentEnrolledCourse.routes';
import { studentEnrolledCourseMarkRoutes } from '../modules/StudentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { studentSemesterPaymentRoutes } from '../modules/StudentSemesterPayment/studentSemesterPayment.routes';
import { userRoutes } from '../modules/User/user.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemesterRoutes
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    routes: academicFacultyRoutes
  },
  {
    path: '/admins',
    routes: adminRoutes
  },
  {
    path: '/auth',
    routes: authRoutes
  },
  {
    path: '/buildings',
    routes: buildingRoutes
  },
  {
    path: '/courses',
    routes: courseRoutes
  },
  {
    path: '/faculties',
    routes: facultyRoutes
  },
  {
    path: '/management-departments',
    routes: managementDepartmentRoutes
  },
  {
    path: '/offered-courses',
    routes: offeredCourseRoutes
  },
  {
    path: '/offered-course-class-schedules',
    routes: offeredCourseClassScheduleRoutes
  },
  {
    path: '/offered-course-sections',
    routes: offeredCourseSectionRoutes
  },
  {
    path: '/rooms',
    routes: roomRoutes
  },
  {
    path: '/semester-registrations',
    routes: semesterRegistrationRoutes
  },
  {
    path: '/students',
    routes: studentRoutes
  },
  {
    path: '/student-enrolled-courses',
    routes: studentEnrolledCourseRoutes
  },
  {
    path: '/student-enrolled-course-marks',
    routes: studentEnrolledCourseMarkRoutes
  },
  {
    path: '/student-semester-payments',
    routes: studentSemesterPaymentRoutes
  },
  {
    path: '/users',
    routes: userRoutes
},
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
