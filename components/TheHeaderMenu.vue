<!--suppress JSUnusedGlobalSymbols, JSUnusedGlobalSymbols -->
<template>
	<nav class="nav" :class="{ nav__open: isOpen }">
		<ul class="nav__list">
			<li class="nav__list__item">
				<a href="#home">Accueil</a>
			</li>
			<li class="nav__list__item">
				<a href="#whynot">Pourquoi nous</a>
			</li>

			<li class="nav__list__item">
				<a href="#staff">Notre équipe</a>
			</li>

			<li class="nav__list__item">
				<a href="#contact">Contact</a>
			</li>
		</ul>
		<div class="nav__hamburger" @click="toggleMenu">
			<div class="nav__hamburger__line" />
			<div class="nav__hamburger__line" />
			<div class="nav__hamburger__line" />
		</div>
	</nav>
</template>

<script>
export default {
	name: "TheHeaderMenu",

	data() {
		return {
			isOpen: false,
		};
	},

	mounted() {
		window.addEventListener("resize", this.onResize);
	},

	unmounted() {
		window.removeEventListener("resize", this.onResize);
	},

	methods: {
		onResize() {
			if (this.isOpen) this.toggleMenu();
		},

		toggleMenu() {
			if (!this.isOpen) document.body.style.overflow = "hidden";
			else document.body.style.overflow = "initial";

			this.isOpen = !this.isOpen;
		},
	},
};
</script>

<style lang="scss">
.nav {
	z-index: 1;

	&__list {
		display: flex;
		flex-direction: column;
		transform: scaleY(0);
		transform-origin: bottom;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		position: absolute;
		inset: 0;
		padding: 0;
		opacity: 0;
		margin-block: 0;
		background-color: rgb(#000, 75%);
		transition: all 0.2s ease-in-out;
		will-change: transform, opacity;
		height: 100vh;

		&__item {
			list-style-type: none;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 2em;
			font-weight: 600;
			padding: 0.5em;
			user-select: none;

			@media screen and (max-width: 550px) {
				font-size: 8vw;
			}

			& a {
				padding-inline: 0.5em;
				text-decoration: none;
				color: white;
				&:hover {
					color: var(--accent-2nd);
				}
			}
		}
	}

	&__open {
		& > .nav__list {
			opacity: 1;
			transform: scaleY(1);
		}

		& .nav__hamburger {
			&__line:nth-child(1) {
				transform: rotate(45deg) translateY(-3px);
			}

			&__line:nth-child(2) {
				transform: scaleX(0);
			}

			&__line:nth-child(3) {
				transform: rotate(-45deg) translateY(3px);
			}
		}
	}

	&__btn {
		user-select: none;
		position: relative;
		z-index: 5;
	}

	&__hamburger {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 30px;
		position: relative;
		z-index: 5;
		padding: 0.5rem;
		transition: all 300ms ease-in-out;

		&__line {
			height: 3px;
			background-color: white;
			border-radius: 300px;
			transition: all 300ms ease-in-out;

			&:nth-child(1) {
				transform-origin: left top;
			}

			&:nth-child(2) {
				transform-origin: left;
			}

			&:nth-child(3) {
				transform-origin: left bottom;
			}
		}
	}
}

@media screen and (min-width: 900px) {
	.nav {
		&__hamburger {
			display: none;
		}

		&__list {
			display: flex;
			flex-direction: row;
			position: relative;
			opacity: 1;
			transform: scaleY(1);
			background-color: transparent;
			transition: opacity 0.1s 0.3s ease-in-out;

			&__item {
				font-size: 1.2em;
			}
		}
	}
}
</style>
