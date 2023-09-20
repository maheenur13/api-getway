import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validations';

const router = express.Router();

router.post(
  '/',
  validateRequest(academicSemesterValidation.create),
  AcademicSemesterController.createSemester
);
router.get('/', AcademicSemesterController.getAllSemester);
router.get('/:id', AcademicSemesterController.getSingleSemester);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.update),
  AcademicSemesterController.updateSemester
);
router.delete('/:id', AcademicSemesterController.deleteSemester);

export const academicSemesterRoutes = router;
