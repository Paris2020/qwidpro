<script setup>
    import Icon from "../global/Icon.vue";
    
    const props = defineProps({
        profile: Object
    });

</script>

<template>
    <router-link class="profile" :to="`{params: ${profile.id} }`">
       <div class="info top">
            <icon name="user-avatar"></icon>
            <!-- <div class="stars"><icon name="stars"></icon></div> -->
       </div>
        <div class="info bottom">
            <dl>
                <dt>{{ profile.profileDetails['name']}} {{ profile.profileDetails['surname']}} </dt>
                <dd>{{ profile.profileDetails['role'] }}</dd>
                <dd>{{ profile.profileDetails['description'] }}</dd>
                <dd><strong>{{ profile['activeProjects'] }}</strong> Active Projects | <strong>{{ profile['completedProjects']}}</strong> Completed Projects | <strong>{{ profile['teams'] }}</strong> Teams</dd>
            </dl>
        </div>
    </router-link>
</template>