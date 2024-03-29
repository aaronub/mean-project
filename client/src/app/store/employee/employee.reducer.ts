import { createReducer, on } from "@ngrx/store";
import { EmployeeAction } from "./employee.action";
import { Employee } from "src/app/interfaces/employee";

export const initialState: any = undefined

export const employeeReducer = createReducer(
    initialState,
    on(EmployeeAction.setEmployeeInfo, (state, {employeeInfo}) => employeeInfo)
)