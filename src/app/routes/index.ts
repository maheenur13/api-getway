import express from 'express';
import { academicSemesterRoutes } from '../modules/AcademicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/AcademicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../modules/AcademicFaculty/academicFaculty.routes';
import { adminRoutes } from '../modules/Admin/admin.routes';
import { authRoutes } from '../modules/Auth/auth.routes';

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
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
