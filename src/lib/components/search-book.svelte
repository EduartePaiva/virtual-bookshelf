<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';

	let query = $state('');
	const fetchSearchData = (q: string) => {
		const url = new URL('https://openlibrary.org/search.json');
		url.searchParams.append('q', q);
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then(console.log);
	};

	$effect(() => {
		if (query.trim().length < 3) {
			return;
		}

		const id = setTimeout(() => {
			fetchSearchData(query);
		}, 500);

		return () => clearTimeout(id);
	});
</script>

<Input type="text" bind:value={query} placeholder="Search a book" class="max-w-xs" />

<p>{query}</p>
