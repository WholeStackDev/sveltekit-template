<script>
    import { goto } from '$app/navigation';
    let email;
    let password;
        
    const signin = async () => {
        await fetch('api/login', {
            method: 'post',
            body: JSON.stringify({ email, password})
        });
        await goto('/');
        window.location.reload();
    };
</script>

<form on:submit|preventDefault={signin}>
	<input id="email" name="email" bind:value={email} type="email" placeholder="email" />
	<input id="password" name="password" bind:value={password} type="password" placeholder="password" />
	<button type="submit">Login</button>
</form>