<template>
  <li class="contact-list-item">
    <div>
      Name: {{ contact.name }}
    </div>
    <div>
      Phone: {{ contact.phone | withoutHyphens }}
    </div>
  </li>
</template>

<script>
export default {
  filters: {
    withoutHyphens (value) {
      return value.replace(/-/g, "");
    }
  },
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
};
</script>