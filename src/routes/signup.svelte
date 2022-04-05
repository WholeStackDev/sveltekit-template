<script>
	import supabase from '$lib/supabase';
	let email;
	let password;
	
	const signup = async () => {
		await supabase.auth.signUp({
			email: email,
			password: password
		})
	}
</script>

<div>
	<input bind:value={email} type="email" placeholder="email" />
	<input bind:value={password} type="password" placeholder="password" />
	<button on:click={signup}>Login</button>
</div>