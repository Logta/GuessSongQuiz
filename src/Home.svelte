<script>
	import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
	} from "sveltestrap";
	import PointCalc from "./PointCalc.svelte";

	let csv = "";

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
</style>

<main>
	<Navbar color="dark" dark expand="md">
		<NavbarBrand href="/">曲あてクイズ</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		  <Nav class="ml-auto" navbar>
			<NavItem>
			  <NavLink href="#components/">得点計算</NavLink>
			</NavItem>
			<NavItem>
			  <NavLink href="https://github.com/Logta/GuessSongQuiz">GitHub</NavLink>
			</NavItem>
		  </Nav>
		</Collapse>
	  </Navbar>
	  <div id="home">
		<PointCalc />
	  </div>
</main>
