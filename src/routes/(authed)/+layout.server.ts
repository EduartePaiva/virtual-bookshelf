import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = (event): never | { user: any } => {
    if (!event.locals.user && event.url.pathname != "/login") {
        return redirect(302, '/login');
    }
    return { user: event.locals.user }
};
