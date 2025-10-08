<script>
	import { onMount } from 'svelte';
	import { data, title } from '@data/resume';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	let turnstileLoaded = false;
	let challengeContainer;
	let isVerifying = false;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
		script.async = true;
		script.defer = true;
		script.onload = () => (turnstileLoaded = true);
		document.head.appendChild(script);
	});

	function handleDownloadClick(event) {
		event.preventDefault();

		if (!turnstileLoaded || !window.turnstile) {
			alert('Verification system not ready. Please try again.');
			return;
		}

		isVerifying = true;

		// Create Turnstile challenge dynamically
		window.turnstile.render(challengeContainer, {
			sitekey: 'YOUR_TURNSTILE_SITE_KEY', // 🔹 Replace with your actual site key
			callback: (token) => {
				// Token validated — proceed with download
				isVerifying = false;
				triggerDownload();
			},
			'action': 'resume_download',
			'appearance': 'interaction-only', // shows challenge only when needed
		});
	}

	function triggerDownload() {
		const link = document.createElement('a');
		link.href = data;
		link.download = '';
		link.click();
	}
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<button on:click={handleDownloadClick} disabled={isVerifying}>
				<Chip size={'1.25em'}>
					{isVerifying ? 'Verifying...' : 'Download'}
				</Chip>
			</button>
			<div bind:this={challengeContainer} id="turnstile-container"></div>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20px;
		gap: 1rem;

		button {
			background: none;
			border: none;
			cursor: pointer;
			color: inherit;
		}
	}
</style>