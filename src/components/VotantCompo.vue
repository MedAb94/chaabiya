<template>
  <v-container>
    <v-btn
        href="/create"
        text
    >
      <span class="text-center">Ajouter un votant</span>
      <v-icon>mdi-account-group</v-icon>
    </v-btn>


    <v-card
        class="mx-auto"
        max-width="400"
        tile
    >
      <v-list-item v-for="vote in votants" :key="vote.nni" three-line>
        <v-list-item-content>
          <v-list-item-title>{{ vote.name }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ vote.nni }} - {{ vote.phone }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            {{ getOfficeName(vote.officeId) }}
          </v-list-item-subtitle>
        </v-list-item-content>
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
    votants: [],
    offices: [],
  }),
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, 'votants'));
        querySnapshot.forEach((doc) => {
          this.votants.push({id: doc.id, ...doc.data()});
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async fetchOffices() {
      try {
        const querySnapshot = await getDocs(collection(db, 'offices'));
        querySnapshot.forEach((doc) => {
          this.offices.push({id: doc.id, ...doc.data()});
        });
      } catch (error) {
        console.error("Error fetching offices:", error);
      }
    },
    getOfficeName(officeId) {
      const office = this.offices.find((office) => office.id == officeId);
      return office ? office.name : 'Unknown Office';
    }
  }
}
</script>
