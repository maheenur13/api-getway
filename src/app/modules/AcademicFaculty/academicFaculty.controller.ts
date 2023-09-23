import { Request, Response } from 'express';

import catchAsync from '../../../shared/catchAsync';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.createFaculty(req);
  sendResponse(res, result);
});

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllFaculty(req);
  sendResponse(res, result);
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getSingleFaculty(req);
  sendResponse(res, result);
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.updateFaculty(req);
  sendResponse(res, result);
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.deleteFaculty(req);
  sendResponse(res, result);
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculty,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty
};
