declare module 'next/types' {
    export type PageProps = {
        params: { [key: string]: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    };
}