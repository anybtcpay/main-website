<script setup>
  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
  const availableLocales = computed(() => (locales.value).filter(i => i.code !== locale.value));
</script>

<template>
  <footer class="footer">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <OButton
            href="mailto:anybtcpay@protonmail.com"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >{{ $t('footer.email') }}</OButton>
        </div>
        <div class="level-item">
          <!-- https://keys.openpgp.org/vks/v1/by-fingerprint/F5BD0232C4D2B938E430C436AF501BF486A9CCB0 -->
          <OButton
            href="https://raw.githubusercontent.com/anybtcpay/.github/main/public_pgp_email.txt"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >PGP</OButton>
        </div>
        <div class="level-item">
          <OButton
            href="https://github.com/anybtcpay"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >Github</OButton>
        </div>
        <div class="level-item">
          <OButton
            href="https://t.me/anybtcpay"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >Telegram</OButton>
        </div>
        <div class="level-item">
          <OButton
            href="https://twitter.com/anybtcpay"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >Twitter</OButton>
        </div>
        <div class="level-item">
          <OButton
            href="https://iris.to/anybtcpay@getalby.com"
            tag="a"
            target="_blank"
            variant="primary"
            inverted
          >Nostr</OButton>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="buttons">
            <OButton
              v-for="locale in availableLocales"
              :key="locale.code"
              tag="router-link"
              :to="switchLocalePath(locale.code)"
              variant="primary"
              inverted
            >{{ locale.name }}</OButton>
          </div>
        </div>
      </div>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  padding-left: 0rem;
  padding-right: 0rem;
}
</style>
