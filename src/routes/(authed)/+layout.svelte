<script lang="ts">
	import type { LayoutServerData } from './$types';
	import type { Snippet } from 'svelte';
	import Header from '$lib/components/header.svelte';

	interface Props {
		data: LayoutServerData;
		children: Snippet;
	}

	let { children, data }: Props = $props();

	$inspect(data);
</script>

<Header user={data.user} />

{@render children()}
