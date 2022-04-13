import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
  id?: number;
  name?: string | null;
  employees?: IEmployee[] | null;
}

export const defaultValue: Readonly<IDepartment> = {};
