<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex h-screen w-full items-center justify-center">
	<form method="post" action="?/signInSocial" use:enhance>
		<input type="hidden" name="provider" value="github" />
		<input type="hidden" name="callbackURL" value="/" />
		<button
			class="cursor-pointer rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
			>Login with GitHub</button
		>
	</form>
</div>
