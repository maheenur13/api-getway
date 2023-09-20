import { z } from 'zod';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitle
} from './academicSemester.contants';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required!'
    }),
    title: z.enum([...academicSemesterTitle] as [string, ...string[]], {
      required_error: 'Title is required!'
    }),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required!'
    }),
    startMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start month is required!'
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End month is required!'
    })
  })
});
const update = z.object({
  body: z.object({
    year: z
      .number({
        required_error: 'Year is required!'
      })
      .optional(),
    title: z
      .enum([...academicSemesterTitle] as [string, ...string[]], {
        required_error: 'Title is required!'
      })
      .optional(),
    code: z.enum([...academicSemesterCodes] as [string, ...string[]], {
      required_error: 'Code is required!'
    }),
    startMonth: z
      .enum([...academicSemesterMonths] as [string, ...string[]], {
        required_error: 'Start month is required!'
      })
      .optional(),
    endMonth: z
      .enum([...academicSemesterMonths] as [string, ...string[]], {
        required_error: 'End month is required!'
      })
      .optional()
  })
});

export const academicSemesterValidation = {
  create,
  update
};
