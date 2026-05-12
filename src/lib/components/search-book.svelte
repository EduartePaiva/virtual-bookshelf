<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';

	let query = $state('');
	let debouncedQuery = $state('');

	$effect(() => {
		console.log('rodou');
		if (query.trim().length < 3) {
			debouncedQuery = '';
			return;
		}

		const id = setInterval(() => {
			debouncedQuery = query;
		}, 500);

		return () => clearInterval(id);
	});
</script>

<Input type="text" bind:value={query} placeholder="Search a book" class="max-w-xs" />

<p>{debouncedQuery}</p>
