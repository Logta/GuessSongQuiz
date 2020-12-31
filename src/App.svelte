<script lang="ts">
</script>

<main>
</main>
<script>
	import Home from "./Home.svelte";
	import { FirebaseApp, User, Doc, Collection } from "sveltefire";
  
	import firebase from "firebase/app";
	import "firebase/firestore";
	import "firebase/auth";
	import "firebase/performance";
	import "firebase/analytics";
  
	let firebaseConfig = {
	// Insert Firebase Credentials here
	};
  
	firebase.initializeApp(firebaseConfig);
  </script>
  
  <main>
  
	{#if !firebaseConfig.projectId}
	  <strong>Step 0</strong>
	  Create a
	  <a href="https://firebase.google.com/">Firebase Project</a>
	  and paste your web config into
	  <code>App.svelte</code>
	  .
	{/if}
  
	<!-- 1. 🔥 Firebase App -->
	<FirebaseApp {firebase}>
		<Home />
	</FirebaseApp>
  
  </main>
  
  
  <!-- Styles -->
  <style>
	main {
	  text-align: center;
	  padding: 1em;
	  max-width: 240px;
	  margin: 0 auto;
	}
  
	h1,
	em {
	  color: #ff3e00;
	}
  
	hr {
	  height: 1px;
	  border: none;
	  background: rgb(195, 195, 195);
	}
  
	@media (min-width: 640px) {
	  main {
		max-width: none;
	  }
	}
  </style>