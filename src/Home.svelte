<script>
	import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
	} from "sveltestrap";
	import Router, {link} from 'svelte-spa-router'
	import PointCalc from "./PointCalc.svelte";
	import About from "./About.svelte";

	const routes = {
    '/': About,
    '/point/': PointCalc,
	}
	let isOpen = false;

	function handleUpdate(event) {
	isOpen = event.detail.isOpen;
	}
</script>

<style>
	@import "bootstrap/dist/css/bootstrap.min.css";
	div#home{
		padding-top: 25px;
	}
	a:link{
		color:antiquewhite;
	}
	a{
		padding-right: 25px;
		position: relative;
		top: 25%;
		color:antiquewhite;
	}
</style>

<main>
	<Navbar color="dark" dark expand="md">
		<NavbarBrand><a href="/" use:link>曲あてクイズ</a></NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		  <Nav class="ml-auto" navbar>
			<NavItem>
			  <a href="/point/" use:link>得点計算</a>
			</NavItem>
			<NavItem>
				<a href="https://github.com/Logta/GuessSongQuiz">GitHub</a>
			</NavItem>
		  </Nav>
		</Collapse>
	</Navbar>
	<div id="home">
		<Router {routes}/>
	</div>
</main>
