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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
