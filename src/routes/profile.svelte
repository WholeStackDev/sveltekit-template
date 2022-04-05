<script context="module">
	import { log } from '$lib/log';

	export async function load({ session }) {
    log(session);
	    if (!session.authenticated) {
	    	return {
	    	  status: 302,
	    	  redirect: '/'
	    	};
	    }
	    return {
	        props: {
	            sessionData: session
	        }
	    };
	}
</script>

<script>
	export let sessionData;

const signoff = async () => {
    await fetch('/api/logout');
    window.location.reload();
};

</script>

<div>{JSON.stringify(sessionData)}</div>
<div on:click={signoff}>Logout</div>