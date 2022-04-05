import cookie from 'cookie';
// import { log } from '$lib/log';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const session = cookie.parse(event.request.headers.get('cookie')).session;
    // @ts-ignore
    event.locals.authenticated = session ? true : false;
    // @ts-ignore
    event.locals.user = { email: session };
    const response = await resolve(event);
    return response;
}

export async function getSession(request) {
    const { user, authenticated } = request.locals;
    return {
        user,
        authenticated,
    };
}