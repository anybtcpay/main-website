<script setup>
const i18nHead = useLocaleHead({});

useHead({
  htmlAttrs: {
    lang: (i18nHead) ? i18nHead.value.htmlAttrs.lang : null
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <div class="ltr-full-body container">
          <main class="ltr-main-content">
              <slot />
          </main>
          <LayoutFooter />
        </div>
      </Body>
    </Html>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>