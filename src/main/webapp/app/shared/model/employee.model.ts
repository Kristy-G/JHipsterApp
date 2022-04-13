import { IDepartment } from 'app/shared/model/department.model';

export interface IEmployee {
  id?: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  department?: string | null;
  department?: IDepartment | null;
  department?: IDepartment | null;
}

export const defaultValue: Readonly<IEmployee> = {};
