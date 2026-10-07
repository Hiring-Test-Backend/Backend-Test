export const env = {
  port: parseInt(process.env.PORT ?? '3001', 10),
  isProd: process.env.NODE_ENV === 'production',
  jwt: {
    secret: process.env.JWT_SECRET ?? 'dev-secret-change-in-production',
    expiresIn: process.env.JWT_EXPIRES_IN ?? '8h',
  },
  interviewLogin: process.env.NODE_ENV !== 'production' && process.env.INTERVIEW_LOGIN !== 'false',
} as const;
