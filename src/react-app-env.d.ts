/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}


declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

