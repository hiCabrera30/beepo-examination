<template>
    <div>
        <auth-header :user="user"></auth-header>
    </div>
</template>

<script>
import mixins from '../includes/mixins';
import AuthHeader from './includes/AuthHeader';

export default {
    name: "DashboardPage",

    components: { AuthHeader },
    data: () => ({
        pageTitle: "Beepo Exam - Dashboard",
    }),

    mixins: [ mixins ],

    props: {
        user: Object,
    }
}
</script>