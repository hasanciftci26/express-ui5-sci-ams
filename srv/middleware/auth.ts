import { createSecurityContext, IdentityService } from "@sap/xssec";
import { ValidationError } from "@sap/xssec/types/error/index.js";
import type { NextFunction, Request, Response } from "express";

const credentials = {}; // TODO
const identityService = new IdentityService(credentials);

const authMiddleWare = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const securityContext = await createSecurityContext(identityService, { req });
        // req[SECURITY_CONTEXT] = securityContext; // TODO
        return next();
    } catch (err) {
        if (err instanceof ValidationError) {
            console.error("Unauthenticated request: ", err);
            return res.sendStatus(401);
        } else {
            console.error("Error while authenticating user: ", err);
            return res.sendStatus(500);
        }
    }
};

export default authMiddleWare;