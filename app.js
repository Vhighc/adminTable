const app = Vue.createApp({
    data() {
        return {
            searchTerm: "",
            currentTab: 0,
            tabs: ["All", "Paid", "Unpaid", "Overdue"],
            title: 'TABLE HEADING',
            names: [
                { fullname: 'Justin Septimus', email: 'tinsep@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'Paid', date: 'Paid on 15/APR/2020', amount: 200, isFav: true },
                { fullname: 'Anika Rhiel Madsen', email: 'kalsen@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'Overdue', date: 'Paid on 15/APR/2020', amount: 300, isFav: true },
                { fullname: 'Miracle Vaccaro', email: 'racaro@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'Paid', date: 'Paid on 15/APR/2020', amount: 250, isFav: true },
                { fullname: 'Erin Levin', email: 'lerin@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'Unpaid', date: 'Paid on 15/APR/2020', amount: 200, isFav: true },
                { fullname: 'Mira Herwitz', email: 'rawitz@email.com', user: 'Inactive', lastlogin: 'Last login: 14/APR/2020', pay: 'paid', date: 'Paid on 15/APR/2020', amount: 200, isFav: false },
                { fullname: 'Jaxson Siphron', email: 'sonron@email.com', user: 'Inactive', lastlogin: 'Last login: 14/APR/2020', pay: 'paid', date: 'Paid on 15/APR/2020', amount: 750, isFav: false },
                { fullname: 'Mira Levin', email: 'ravin@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'Unpaid', date: 'Paid on 15/APR/2020', amount: 200, isFav: true },
                { fullname: 'Lincoln Levin', email: 'colvin@email.com', user: 'Active', lastlogin: 'Last login: 14/APR/2020', pay: 'paid', date: 'Paid on 15/APR/2020', amount: 370, isFav: true },
                { fullname: 'Phillip Saris', email: 'lisar@email.com', user: 'Inactive', lastlogin: 'Last login: 14/APR/2020', pay: 'Unpaid', date: 'Paid on 15/APR/2020', amount: 200, isFav: false },
                { fullname: 'Cheyenne Ekstrom Bothman', email: 'romman@email.com', user: 'Inactive', lastlogin: 'Last login: 14/APR/2020', pay: 'paid', date: 'Paid on 15/APR/2020', amount: 150, isFav: false }
            ]

        };
    },
    methods: {
        changeTab(index) {
            this.currentTab = index;
        },
        search() {
            // 
        }
    },

    computed: {
        paidUsers() {
            return this.names.filter((name) => name.pay !== 'Unpaid' & name.pay !== 'Overdue');
        },
        unPaidUsers() {
            return this.names.filter((name) => name.pay === 'Unpaid');
        },
        overDueUsers() {
            return this.names.filter((name) => name.pay === 'Overdue');
        },

        
        filteredNames() {
            const term = this.searchTerm.toLowerCase();
            if (this.currentTab === 1) {
                return this.paidUsers.filter((name) =>
                    name.fullname.toLowerCase().includes(term) ||
                    name.email.toLowerCase().includes(term)
                )
            } else if (this.currentTab === 2) {
                return this.unPaidUsers.filter((name) =>
                    name.fullname.toLowerCase().includes(term) ||
                    name.email.toLowerCase().includes(term)
                )
            } else if (this.currentTab === 3) {
                return this.overDueUsers.filter((name) =>
                    name.fullname.toLowerCase().includes(term) ||
                    name.email.toLowerCase().includes(term)
                )
            } else {
                return this.names.filter((name) =>
                    name.fullname.toLowerCase().includes(term) ||
                    name.email.toLowerCase().includes(term)
                )
            }
        },

        
        totalSum() {
            if (this.currentTab === 1) {
                return this.paidUsers.reduce((total, user) => total + user.amount, 0);
            } else if (this.currentTab === 2) {
                return this.unPaidUsers.reduce((total, user) => total + user.amount, 0);
            } else if (this.currentTab === 3) {
                return this.overDueUsers.reduce((total, user) => total + user.amount, 0);
            } else {
                return this.names.reduce((total, user) => total + user.amount, 0);
            }
        },

    }
});

app.mount('#app')