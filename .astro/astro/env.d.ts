declare module 'astro:env/client' {
	export const PUBLIC_LINKEDIN_URL: string;	

}

declare module 'astro:env/server' {
	

	export const getSecret: (key: string) => string | undefined;
}
