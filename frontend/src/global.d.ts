// src/global.d.ts
export {};

declare global {
  interface Window {
    freighterApi?: {
      getPublicKey: () => Promise<string>;
    };
  }
}
