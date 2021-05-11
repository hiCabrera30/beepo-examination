const mixins = {
    methods: {
        inititalizePageTitle() {
            if (this.pageTitle) {
                document.title = this.pageTitle;
            }
        },
        

        displayValidationErrors(refs, error) {
            for (const field in error) {
                if (refs[field]) {
                    refs[field].error = error[field];
                }
            }
        },
    },
    mounted() {
        this.inititalizePageTitle();
    }
};

export default mixins;
export { mixins };