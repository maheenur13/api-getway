import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const createSemester = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await AcademicSemesterService.createSemester(req);

  sendResponse(res, result);
});
const getAllSemester = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await AcademicSemesterService.getAllSemester(req);

  sendResponse(res, result);
});
const getSingleSemester = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await AcademicSemesterService.getSingleSemester(req);

  sendResponse(res, result);
});
const updateSemester = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await AcademicSemesterService.updateSemester(req);

  sendResponse(res, result);
});
const deleteSemester = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await AcademicSemesterService.deleteSemester(req);

  sendResponse(res, result);
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemester,
  updateSemester,
  deleteSemester,
  getSingleSemester
};
