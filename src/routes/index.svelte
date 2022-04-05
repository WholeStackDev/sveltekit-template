<script>

	import { transientExample } from '../store/transient';
	import { counter } from '../store/persistent';

	const updateStores = () => {
	    $transientExample = $transientExample + 1;
	    $counter = $counter + 1;
	};
</script>

<button on:click={updateStores}>Update Stores</button>
<div>{$transientExample}</div>
<div>{$counter}</div>