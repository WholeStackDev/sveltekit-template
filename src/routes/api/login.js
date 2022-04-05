import supabase from '$lib/supabase';
import { log } from '$lib/log';


export async function post({request}) {
    let credentials = await request.json();
  
    const {session, error} = await supabase.auth.signIn(credentials);

    if (error) {
        return {
            status: error.status,
            body: error.message
        };
    }

    return {
        status: 302,    
        body: 'success',
        headers: {
            location: '/',
            'set-cookie': `session=${session?.user?.email}; path=/; HttpOnly; Expires=${new Date(session.expires_at * 1000).toUTCString()};`
        }
    };
}