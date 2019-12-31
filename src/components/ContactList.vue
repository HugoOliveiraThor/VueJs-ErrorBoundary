<template>
  <div>
    <h1>My Contacts</h1>
    <ul class="contact-list">
      <template v-for="contact in contacts">
        <ErrorBoundary :key="contact.id">
          <AppContact :contact="contact" />
        </ErrorBoundary>
      </template>
    </ul>
  </div>
</template>

<script>
import AppContact from "./Contact";
export default {
  name: "ContactList",
  components: {
    AppContact
  },
  data: () => ({
    contacts: [
      { id: 1, name: "Edgar Degas", phone: "331-827-1917" },
      { id: 2, name: "Leonardo da Vinci", phone: null }, // Phones didn't exist back then Leo!
      { id: 3, name: "Mary Cassatt", phone: "412-614-1926" },
      { id: 4, name: "Bob Ross", phone: "907-704-1995" },
      { id: 5, name: "Claude Monet", phone: "331-125-1926" }
    ]
  })
};
</script>