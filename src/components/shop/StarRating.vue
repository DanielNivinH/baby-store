<template>
  <div class="star-rating">
    <span
      v-for="star in stars"
      :key="star"
      :class="{ filled: star <= (isHovering ? temporaryRating : rating) }"
      @mouseover="!disabled && hover(star)"
      @mouseleave="!disabled && hover(0)"
      @click="!disabled && rate(star)"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    value: {
      type: Number,
      default: 0
    },
    maxStars: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rating: this.value,
      temporaryRating: this.value,
      isHovering: false
    };
  },
  computed: {
    stars() {
      return Array.from({ length: this.maxStars }, (_, i) => i + 1)
    }
  },
  methods: {
    hover(star) {
      if (!this.disabled) {
        this.temporaryRating = star
        this.isHovering = true;
      }
    },
    rate(star) {
      if (!this.disabled) {
        this.rating = star
        this.$emit('input', star)
        this.isHovering = false
      }
    }
  },
  watch: {
    value(newValue) {
      this.rating = newValue;
    }
  }
};
</script>

<style scoped>
.star-rating {
  display: inline-block;
}

.star-rating span {
  font-size: 1em;
  cursor: pointer;
  color: #ddd;
}

.star-rating .filled {
  color: gold;
}
</style>
