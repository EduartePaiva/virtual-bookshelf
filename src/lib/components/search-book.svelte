<script lang="ts">
	import { Input } from '$lib/components/ui/input/index.js';
	import type { OpenLibrarySearchResult } from '../../types';

	let query = $state('');
	let queryData = $state<null | OpenLibrarySearchResult>(null);
	const fetchSearchData = async (q: string) => {
		const url = new URL('https://openlibrary.org/search.json');
		url.searchParams.append('q', q);
		url.searchParams.append('limit', '10');

		const res = await fetch(url);
		if (res.status === 200) {
			const data = await res.json();
			queryData = data;
			console.log(data);
		} else {
			console.error('error code while querying: ' + res.status);
		}
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

{#snippet bookItem(title: string, author: string[], img: number)}
	<div class="flex gap-2">
		<div class="h-20 w-12">
			<img
				class="h-full w-full"
				src="https://covers.openlibrary.org/b/id/{img}-M.jpg?default=https://openlibrary.org/static/images/icons/avatar_book-sm.png"
				alt="{title} image"
			/>
		</div>
		<div class="flex flex-col overflow-hidden">
			<strong class="text-sm font-medium">{title}</strong>
			<small>by {author[0]}</small>
		</div>
	</div>
{/snippet}

<div class="flex w-100 flex-col">
	<Input type="text" bind:value={query} placeholder="Search a book" class="max-w" />

	{#each queryData?.docs as doc}
		{@render bookItem(doc.title, doc.author_name, doc.cover_i)}
	{/each}
</div>
