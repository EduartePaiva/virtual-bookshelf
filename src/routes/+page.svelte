<script lang="ts">
	import { enhance } from '$app/forms';
	import type { LayoutServerData } from './$types';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data }: { data: LayoutServerData } = $props();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<h1>Hi, {data.user.name}!</h1>
<p>Your user ID is {data.user.id}.</p>

<form method="post" action="?/signOut" use:enhance>
	<Button type="submit" variant="outline">Sign out</Button>
</form>
