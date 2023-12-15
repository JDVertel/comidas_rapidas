<script>
import "./assets/styles.css"
import {
    RouterLink,
    RouterView
} from 'vue-router'
</script>

<template>
<header>

    <h1>hello</h1>
    <h6>mundo</h6>
    <div>

        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/dashboard">Dashboard</RouterLink>
        </nav>
    </div>
</header>

<RouterView />

</template>
