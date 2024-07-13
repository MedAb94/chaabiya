<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-card-title>
              <h3 class="text-h5">Ajouter un votant</h3>
            </v-card-title>
            <v-card-text>
              <v-form @submit.prevent="createVotant">
                <v-text-field
                    v-model="name"
                    label="Nom"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="nni"
                    label="NNI"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="phone"
                    label="Telephone"
                    required
                ></v-text-field>
                <!--              select  office id-->
                <v-select
                    v-model="officeId"
                    :items="offices"
                    item-text="name"
                    item-value="id"
                    label="Bureau"
                    required
                ></v-select>


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
import {addDoc, collection, getDocs} from 'firebase/firestore';

export default {
  data() {
    return {
      name: '',
      nni: '',
      phone: '',
      officeId: '',
      offices: []
    };
  },
  methods: {
    async createVotant() {
      try {
        const docRef = await addDoc(collection(db, 'votants'), {
          name: this.name,
          nni: this.nni,
          phone: this.phone,
          officeId: this.officeId
        });
        console.log('Document written with ID: ', docRef.id);
        this.name = '';
        this.nni = '';
        this.phone = '';
        this.officeId = '';
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    //fetch offices
    async fetchOffices() {
      try {
        const querySnapshot = await getDocs(collection(db, 'offices'));
        querySnapshot.forEach((doc) => {
          this.offices.push({id: doc.id, ...doc.data()});
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  },
  created() {
    this.fetchOffices();
  }
};
</script>
