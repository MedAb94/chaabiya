<template>
  <v-container>
    <v-btn
        href="/offices/new"
        text
    >
      <span class="text-center">Ajouter un bureau</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>


    <v-card
        class="mx-auto"
        max-width="400"
        tile
    >
      <v-list-item v-for="office in offices" :key="office.nni">
        <v-list-item-title >
          <v-list-item-title>{{ office.name }}</v-list-item-title>
        </v-list-item-title>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
import {db} from '@/firebaseConfig';
import {collection, getDocs} from 'firebase/firestore';

export default {
  name: 'HelloWorld',

  data: () => ({
    offices: [],
  }),
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, 'offices'));
        querySnapshot.forEach((doc) => {
          this.offices.push({id: doc.id, ...doc.data()});
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  }
}
</script>
