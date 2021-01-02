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
		padding-right: 10px;
  position: relative;
  top: 25%;
		color:antiquewhite;
	}
</style>

<main>
	<Navbar color="dark" dark expand="md">
		<NavbarBrand href="/">曲あてクイズ</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		  <Nav class="ml-auto" navbar>
			<NavItem>
			  <a href="/point/" use:link>得点計算</a>
			</NavItem>
			<NavItem>
			  <NavLink href="https://github.com/Logta/GuessSongQuiz">GitHub</NavLink>
			</NavItem>
		  </Nav>
		</Collapse>
	  </Navbar>
	  <div id="home">
		<Router {routes}/>
	  </div>
</main>
