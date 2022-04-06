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
	import FaUser from 'svelte-icons/fa/FaUser.svelte';
	import '../app.css';
	export let sessionData;
</script>

<nav class={'shadow-md py-4 mb-6'}>
	<div class={'flex justify-end mr-8 gap-4'}>
		{#if sessionData?.authenticated}
			<a href="/profile" class="h-6"><FaUser class={'h-1'}/></a>
		{:else}
			<a href="/login">Login</a>
		{/if}
	</div>
</nav>

<slot />
