import supabase from '$lib/supabase';
// import { log } from '$lib/log';


export async function get() {
  
    const {error} = await supabase.auth.signOut();

    if (error) {
        return {
            status: error.status,
            body: error.message
        };
    }

    return {
        status: 302,
        headers: {
            'location': '/login',
            'set-cookie': 'session=; path=/; expires=0;'
        }
    };
}