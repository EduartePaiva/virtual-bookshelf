<script lang="ts">
	import type { LayoutServerData } from './$types';
	import type { Snippet } from 'svelte';

	interface Props {
		data: LayoutServerData;
		children: Snippet;
	}

	let { children, data }: Props = $props();

	$inspect(data);
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>

{@render children()}
