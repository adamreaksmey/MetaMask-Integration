import dotenv from 'dotenv';
dotenv.config();

export const API_BASE_URL: any = process.env.NEXT_PUBLIC_API_BASE_URL;
export const PROJECT_ID: any = process.env.NEXT_PUBLIC_PROJECT_ID;