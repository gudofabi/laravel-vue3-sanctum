<template>
  <div class="job-post-page">
    <ol>
        <li v-for="job in getJobs.data" :key="job.id">
            {{ job.title }}
        </li>
    </ol>
    <Pagination :data="getJobs" @pagination-change-page="fetchJobs" />
  </div>
</template>

<script>
import LaravelVuePagination from 'laravel-vue-pagination';
import { mapActions, mapState } from 'pinia'
import { useJobPostStore } from '../stores/jobPost'

export default {
    components: {
        'Pagination': LaravelVuePagination
    },
    created() {
        this.fetchJobs();
    },
    computed: {
        ...mapState(useJobPostStore, ['getJobs'])
    },
    methods: {
        ...mapActions(useJobPostStore, ['fetchJobs']),
    }
}
</script>

<style>

</style>