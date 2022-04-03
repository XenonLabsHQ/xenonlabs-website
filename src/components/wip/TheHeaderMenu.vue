<template>
	<nav class="nav">
		<ul class="nav__list" :class="{ nav__list__open: isOpen }">
			<li v-for="item in menuItems" :key="item.name" class="nav__list__item">
				<a :href="item.href">{{ item.name }}</a>
			</li>
		</ul>

		<ul class="nav__bar">
			<li v-for="item in menuItems" :key="item.name" class="nav__bar__item">
				<a :href="item.href">{{ item.name }}</a>
			</li>

			<div class="nav__hamburger" @click="isOpen = !isOpen">
				<div class="nav__hamburger__line" />
				<div class="nav__hamburger__line" />
				<div class="nav__hamburger__line" />
			</div>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "TheHeaderMenu",

	data() {
		return {
			isOpen: false,
			menuItems: [
				{
					name: "Accueil",
					href: "#home",
				},

				{
					name: "Pourquoi nous",
					href: "#why",
				},

				{
					name: "Notre équipe",
					href: "#equipe",
				},

				{
					name: "Contact",
					href: "#contact",
				},
			],
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
			this.isOpen = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.nav {
	&__list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		justify-content: center;
		position: absolute;
		inset: 0;
		padding: 0;
		opacity: 0;
		margin-block: 0;

		transform: scaleY(0);
		transform-origin: bottom;
		background-color: rgb(#000, 75%);
		transition: all 0.1s ease-in-out;
		will-change: transform, opacity;

		&__open {
			opacity: 1;
			transform: scaleY(1);
		}

		&__item {
			list-style-type: none;
			text-align: center;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 32pt;
			font-weight: 600;
			padding: 15px;
			user-select: none;

			@media screen and (max-width: 550px) {
				padding: 15px 0;
				font-size: 8vw;
			}

			& a {
				text-decoration: none;
				color: white;
				padding: 15px 30px;
				&:hover {
					color: var(--accent-2nd);
				}
			}
		}
	}

	&__btn {
		user-select: none;
		position: relative;
		z-index: 2;
	}

	&__hamburger {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 30px;
		z-index: 3;

		&__line {
			height: 3px;
			background-color: white;
			border-radius: 300px;
		}

		@media screen and (min-width: 900px) {
			display: none;
		}
	}

	&__bar {
		display: flex;
		align-items: center;
		gap: 15px;
		list-style-type: none;

		&__item {
			z-index: 2;

			& a {
				text-decoration: none;
				color: white;
				font-size: 14pt;
			}

			@media screen and (max-width: 900px) {
				display: none;
			}
		}
	}
}
</style>
