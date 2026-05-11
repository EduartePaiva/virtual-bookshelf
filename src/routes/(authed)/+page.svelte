<script lang="ts">
	import { enhance } from '$app/forms';
	import type { LayoutServerData } from './$types';
	import { Button } from '$lib/components/ui/button/index.js';

	let { data }: { data: LayoutServerData } = $props();
</script>

<h1>Hi, {data.user.name}!</h1>

<form method="post" action="?/signOut" use:enhance>
	<Button type="submit" variant="outline">Sign out</Button>
</form>
