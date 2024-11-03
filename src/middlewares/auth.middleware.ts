import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export const authGuard = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
    if(!req?.headers?.authorization) return res.status(403).send('Forbidden')
    next()
};
