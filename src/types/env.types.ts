declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: "development" | "production" | "test";
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_BASE_URL: string;
    }
  }
}

export {};
