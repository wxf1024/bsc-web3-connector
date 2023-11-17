interface request_params {
  method: string
}

interface BinanceChain {
  send: unknown;
  enable: () => Promise<string[]>;
  on?: (method: string, listener: (...args: any[]) => void) => void;
  removeListener?: (method: string, listener: (...args: any[]) => void) => void;

  request: (p: request_params) => Promise<string[]>;
}

declare interface Window {
  BinanceChain?: BinanceChain;
}

declare const __DEV__: boolean;
