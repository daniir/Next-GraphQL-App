import { PrismaClient } from '@prisma/client';
import prisma from '../lib/prisma';

export type Context = {
    prisma: PrismaClient
};

export default async function createContext(): Promise<Context> {
    return{
        prisma,
    };
};