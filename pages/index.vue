<script setup>
const {
  locale,
  t
} = useI18n();

const title = t('index.title');
const description = t('index.description');

useHead({
  title,
  meta: [
    {
      id: 'description',
      name: 'description',
      content: description
    },
    {
      id: 'og:title',
      name: 'og:title',
      content: title
    },
    {
      id: 'og:description',
      name: 'og:description',
      content: description
    },
  ],
});

// redirect to locale only on the homepage
// because i18n settings do not work
const { fullPath } = useRoute();
if (fullPath === '/') navigateTo(`/${locale.value}`);

const { data: shapeshift } = await useFetch('/api/shapeshift');
const { data: peach } = await useFetch('/api/peach');
</script>

<template>
  <NuxtLayout>
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="has-text-centered">
          <div class="title has-text-primary">{{ title }}</div>
          <div class="content">
            <div class="block ltr-has-new-line">{{ description }}</div>
            <div class="block has-text-weight-semibold">{{ $t('index.openSource') }}
              <NuxtLink
                to="https://github.com/anybtcpay"
                target="_blank"
              >{{ $t('index.repo') }}</NuxtLink>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section no-horizzontal-padding">
      <div class="title is-5 has-text-centered">{{ $t('index.useCases.title') }}</div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.useCases.bitcoiner.title') }}</div>
            <div class="content ltr-has-new-line">{{ $t('index.useCases.bitcoiner.description') }}</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.useCases.highRisk.title') }}</div>
            <div class="content ltr-has-new-line">{{ $t('index.useCases.highRisk.description') }}</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.useCases.sanctioned.title') }}</div>
            <div class="content ltr-has-new-line">{{ $t('index.useCases.sanctioned.description') }}</div>     
          </div>
        </div>
      </div>
    </div>
    <div class="section no-horizzontal-padding">
      <div class="title is-5 has-text-centered">{{ $t('index.paymentMethods.title') }}</div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.paymentMethods.bitcoin.title') }}</div>
            <div class="content ltr-has-new-line">{{ $t('index.paymentMethods.bitcoin.description') }}</div>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.paymentMethods.crypto.title') }}</div>
            <div class="content ltr-has-new-line">{{ shapeshift }}</div>
            </div>
        </div>
        <div class="column is-one-third">
          <div class="box ltr-equal-height">
            <div class="title is-4 has-text-primary">{{ $t('index.paymentMethods.fiat.title') }}</div>
            <div class="content ltr-has-new-line">{{ peach }}</div>     
          </div>
        </div>
      </div>
    </div>
    <div class="section no-horizzontal-padding">
      <div class="title is-5 has-text-centered">{{ $t('index.services.title') }}</div>
      <div class="columns">
        <div class="column is-one-third">
          <div class="card ltr-equal-height">
            <div class="card-content ltr-equal-height">
              <div class="content">
                <div class="title is-4 has-text-primary">{{ $t('menu.invoicing') }}</div>
            <div class="content ltr-has-new-line">{{ $t('index.services.invoicing.description') }}</div>           
              </div>
            </div>
            <footer class="card-footer">
              <NuxtLink class="card-footer-item">{{ $t('index.comingSoon') }}</NuxtLink> 
            </footer>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card ltr-equal-height">
            <div class="card-content ltr-equal-height">
              <div class="content">
                <div class="title is-4 has-text-primary">{{ $t('menu.shopping') }}</div>
                <div class="ltr-has-new-line">{{ $t('index.services.shopping.description') }}</div>             
              </div>
            </div>
            <footer class="card-footer">
              <NuxtLink class="card-footer-item">{{ $t('index.comingSoon') }}</NuxtLink> 
            </footer>
          </div>
        </div>
        <div class="column is-one-third">
          <div class="card ltr-equal-height">
            <div class="card-content ltr-equal-height">
              <div class="content">
                <div class="title is-4 has-text-primary">{{ $t('menu.booking') }}</div>
                <div class="ltr-has-new-line">{{ $t('index.services.booking.description') }}</div>               
              </div>
            </div>
            <footer class="card-footer">
              <NuxtLink href="https:booking.anybtcpay.com" target="_blank" class="card-footer-item">Cloud</NuxtLink> 
              <NuxtLink href="https://github.com/anybtcpay/booking-self" target="_blank" class="card-footer-item">Repo</NuxtLink>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.no-horizzontal-padding {
  padding: 3rem 0rem;
}
</style>