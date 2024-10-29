<template>
  <LateralModal ref="lateralModal"
  :showHeading="false">
    <div class="filter">
      <slot/>
    </div>
  </LateralModal>
</template>
<script>
import LateralModal from '@/components/modals/LateralModal.vue'

export default {
  name: 'FilterModal',
  components: {
    LateralModal,
  },
  methods: {
    openModal(){
      this.$refs.lateralModal.openModal()
    },
    closeModal(){
      this.$refs.lateralModal.closeModal()
    },
  },
}
</script>
<style scoped lang="stylus">
.filter
  margin 25px 0 0 0
</style>