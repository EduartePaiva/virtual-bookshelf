<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	interface Props {
		user: any;
	}

	const { user }: Props = $props();
</script>

<header class="my-2 flex items-center justify-around gap-2 px-2 sm:px-0">
	<span>Bookshelf</span>
	<span>Welcome back {user.name}</span>

	<Avatar.Root>
		<Avatar.Image src={user.image} alt="@shadcn" />
		<Avatar.Fallback>{(user.name as string).slice(0, 2)}</Avatar.Fallback>
	</Avatar.Root>
</header>
