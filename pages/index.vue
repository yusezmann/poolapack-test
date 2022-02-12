<template>
  <div>
    <Breadcrumb />
    <ProductDetail />
  </div>
</template>

<script>
import Breadcrumb from '~/components/header/Breadcrumb.vue'
import ProductDetail from '~/components/product/ProductDetail.vue'
export default {
  name: 'IndexPage',
  components: { Breadcrumb, ProductDetail },
}
</script>
