import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const createDepartment = async (req: Request): Promise<IGenericResponse> => {
  console.log('here');
  console.log(req.headers);

  const response: IGenericResponse = await HttpService.post('/academic-departments', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  console.log(response);
  return response;
};

const getAllDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-departments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleDepartment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get(
    `/academic-departments/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const updateDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/academic-departments/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
const deleteDepartment = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-departments/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicDepartmentService = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment
};
