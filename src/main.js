import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'


const store = createStore({
    /* state, actions, mutations */

    state: {
        profiles: [
            {
                id: 0,
                profileDetails: {
                    name: "Cindy",
                    surname: "Ndlovu",
                    role: "Graphic Designer, Web Developer",
                    description: "Website Developer, Frontend Developer, IT Professional"
                },
                activeProjects: 2,
                completedProjects: 2,
                teams: 3,
                status: false,
                portfolio: [
                    {
                        id: 0,
                        label: "Website 1",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                    {
                        id: 1,
                        label: "Website 2",
                        thumbnail: "project_01",
                        link: "project_name.com"
                    },
                    {
                        id: 2,
                        label: "Website 3",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                ],
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                moreDetails: [
                    {
                        id: 0,
                        title: "Experience",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                      id: 1,
                      title: "Experience",
                      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ]
            },
            {
                id: 1,
                profileDetails: {
                    name: "Teddy",
                    surname: "Town",
                    role: "Social Media Ambassador",
                    description: "Social Campaigns, Social Marketing Content",
                },
                activeProjects: 5,
                completedProjects: 3,
                teams: 1,
                status: true,
                portfolio: [
                    {
                        id: 0,
                        label: "Website 1",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                    {
                        id: 1,
                        label: "Website 2",
                        thumbnail: "project_01",
                        link: "project_name.com"
                    },
                    {
                        id: 2,
                        label: "Website 3",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                ],
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                moreDetails: [
                    {
                        id: 0,
                        title: "Experience",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                      id: 1,
                      title: "Experience",
                      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ]
            },
            {
                id: 2,
                profileDetails: {
                    name: "Sandy",
                    surname: "Michaels",
                    role: "UX DesigneR",
                    description: "User Experience of Apps and Web Applications",
                },
                activeProjects: 3,
                completedProjects: 2,
                teams: 1,
                status: true,
                portfolio: [
                    {
                        id: 0,
                        label: "Website 1",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                    {
                        id: 1,
                        label: "Website 2",
                        thumbnail: "project_01",
                        link: "project_name.com"
                    },
                    {
                        id: 2,
                        label: "Website 3",
                        thumbnail: "project_01",
                        link: "project_name.co.za"
                    },
                ],
                bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum." +
                     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                moreDetails: [
                    {
                        id: 0,
                        title: "Experience",
                        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    {
                      id: 1,
                      title: "Experience",
                      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                ]
            }
        ]
    }
});


createApp(App).use(store).mount('#app')