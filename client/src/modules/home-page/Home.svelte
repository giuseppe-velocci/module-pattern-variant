<script>
	export let name;
	console.log(fetch('/api/mail').then(x => {x}, y => {y} ));
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit us.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>