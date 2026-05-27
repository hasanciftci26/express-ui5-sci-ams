import express from "express";
import EmployeeController from "../controller/employee.js";

const employeeRouter = express.Router();
const controller = new EmployeeController();

employeeRouter.get("/", controller.getEmployees);
employeeRouter.get("/:employeeId", controller.getSingleEmployee);

employeeRouter.post("/:employeeId", controller.createEmployee);

employeeRouter.patch("/:employeeId", controller.updateEmployee);

employeeRouter.delete("/:employeeId", controller.deleteEmployee);

export default employeeRouter;