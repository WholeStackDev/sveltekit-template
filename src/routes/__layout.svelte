<script context="module">
	export async function load({ session }) {
	    return {
	        props: {
	            sessionData: session
	        }
	    };
	}
</script>

<script>
	import { goto } from '$app/navigation';
	export let sessionData;

	const nav = async (route) => {
	    await goto(route);
	};

</script>

<div>
	<!-- {#if sessionData?.authenticated}
		<div>Profile</div>
	{:else}
		<div>Login</div>
	{/if} -->
	<div on:click={() => nav('/')}>Home</div>
	<div on:click={() => nav('/profile')}>Profile</div>
	<div on:click={() => nav('/login')}>Login</div>
	<div on:click={() => nav('/signup')}>Sign Up</div>
</div>

<slot />