import { defineStore } from "pinia";
import repository from '../api/repository';

export const useJobPostStore = defineStore({
    id: 'jobPost',
    state: () => ({
        jobs: [],
        jobs: {},
    }),

    getters: {
        getJobs: state => state.jobs,
    },

    actions: {
        async fetchJobs(page = 1) {
            const { data } = await repository.paginateJob(page);
            this.jobs = data.job_post;
        },
    }
})