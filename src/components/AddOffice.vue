<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-card-title>
              <h3 class="text-h5">Nouveau bureau</h3>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="createVotant">
                <v-text-field
                    v-model="name"
                    label="Nom"
                    required
                ></v-text-field>
                <v-btn
                    type="submit"
                    color="primary"
                >
                  Ajouter
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {db} from '../firebaseConfig';
import {addDoc, collection} from 'firebase/firestore';

export default {
  data() {
    return {
      name: '',
      nni: '',
      phone: ''
    };
  },
  methods: {
    async createVotant() {
      try {
        const docRef = await addDoc(collection(db, 'offices'), {
          name: this.name,
        });
        console.log('Document written with ID: ', docRef.id);
        this.name = '';
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  }
};
</script>
