<script setup>
    import Icon from "../global/Icon.vue";
</script>

<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="copyright">
                    <p>
                        <a href="/">Copyright &copy; {{ date }} KwidPro</a> |
                        <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> |
                        <a href="/private-policy" target="_blank">Pivate policy</a>
                    </p>
                </div>
                <div class="social-links">
                    <a href="#" target="_blank"><icon name="facebook"></icon></a>
                    <a href="#" target="_blank"><icon name="instagram"></icon></a>
                    <a href="#" target="_blank"><icon name="linkedIn"></icon></a>
                </div>
        </div>
    </footer>
</template>