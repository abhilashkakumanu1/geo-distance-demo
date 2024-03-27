// validators.ts
import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export namespace validators {
  export const getPlacesWithInRadius = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    // Define the schema for the query parameters
    const schema = Joi.object({
      lat: Joi.number().required().messages({
        "any.required": "Latitude is required",
        "number.base": "Latitude must be a number",
      }),
      lon: Joi.number().required().messages({
        "any.required": "Longitude is required",
        "number.base": "Longitude must be a number",
      }),
      radius: Joi.number().required().messages({
        "any.required": "Radius is required",
        "number.base": "Radius must be a number",
      }),
    });

    // Validate the query parameters
    const { error } = schema.validate(req.query);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // If the validation passed, call the next middleware function
    next();
  };
}
