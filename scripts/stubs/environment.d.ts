interface ImportMetaEnv {
  readonly BASE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'react-router-dom' {
  interface IndexRouteObject {
    routeMetadata?: { pageIdentifier: string };
  }
  interface NonIndexRouteObject {
    routeMetadata?: { pageIdentifier: string };
  }
}
