import type { NextFunction, Request, Response } from "express";

export default class EmployeeController {
    public getEmployees = (req: Request, res: Response, next: NextFunction) => {
        return res.send("Hello");
    };

    public getSingleEmployee = (req: Request, res: Response, next: NextFunction) => {

    };

    public createEmployee = (req: Request, res: Response, next: NextFunction) => {

    };

    public updateEmployee = (req: Request, res: Response, next: NextFunction) => {

    };

    public deleteEmployee = (req: Request, res: Response, next: NextFunction) => {
        
    };
}