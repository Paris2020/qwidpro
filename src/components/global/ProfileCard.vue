<script setup>
    import Icon from "../global/Icon.vue";
    
    const props = defineProps({
        profileDetails: Object,
        activeProjects: Number,
        completedProjects: Number,
        teams: Number,
        status: false
    })
</script>

<template>
    <div class="profile">
       <div class="info top">
            <icon name="user-avatar"></icon>
            <!-- <div class="stars"><icon name="stars"></icon></div> -->
       </div>
        <div class="info bottom">
            <dl>
                <dt>{{ props.profileDetails.name}} {{ props.profileDetails.surname}} </dt>
                <dd>{{ props.profileDetails.role }}</dd>
                <dd>{{ props.profileDetails.description }}</dd>
                <dd><strong>{{ props.activeProjects }}</strong> Active Projects | <strong>{{ props.completedProjects}}</strong> Completed Projects | <strong>{{ props.teams }}</strong> Teams</dd>
            </dl>
        </div>
    </div>
</template>