<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import type { LayoutServerData, LayoutParams } from './$types';
	import type { Snippet } from 'svelte';

	interface Props {
		data: LayoutServerData;
		children: Snippet;
	}

	let { children, data }: Props = $props();

	$inspect(data);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>
{@render children()}
