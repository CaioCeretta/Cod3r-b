<script>
	/* We can forget to export in svelte, otherwise it will not know there is a variable inside of here*/
	export let texto = ''
	export let link = ''
</script>

<li>
	<a
		href={link}
		class="flex gap-2 px-4 py-2 items-center cursor-pointer text-zinc-300
    hover:text-white hover:underline hover:bg-white/10"
	>
		<slot></slot>
		<span>{texto}</span>
	</a>
</li>
