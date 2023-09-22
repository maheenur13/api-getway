import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';

import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.createDepartment(req);
  sendResponse(res, result);
});

const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getAllDepartment(req);
  sendResponse(res, result);
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getSingleDepartment(req);
  sendResponse(res, result);
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.updateDepartment(req);
  sendResponse(res, result);
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.deleteDepartment(req);
  sendResponse(res, result);
});

export const AcademicDepartmentController = {
  insertIntoDB,
  getAllDepartment,
  updateDepartment,
  deleteDepartment,
  getSingleDepartment
};
