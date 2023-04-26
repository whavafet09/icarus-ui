<template>
<div>
  <v-card
      class="mx-auto"
      prepend-icon="mdi-home"
  >
            <template v-slot:title>
            Pre Land Survey
            </template>
            <v-card-text>
              <v-row>
              <v-dialog
                v-model="dialog"
                persistent
                width="500"
              >
                <template v-slot:activator="{ props }">
                  <v-row >
                      <v-col class="text-right" style="margin-right: 20px;">
                        <v-btn
                        color="primary"
                        v-bind="props"
                        >
                        Create Survey
                        </v-btn>
                      </v-col>
                  </v-row>

                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">Create Pre Land Survey</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                        >
                        <v-form @submit.prevent>
                          <v-text-field
                            v-model="prelandsurveyName"
                            label="Pre Land Survey Name"
                          ></v-text-field>
                        </v-form>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="dialog = false"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="blue-darken-1"
                      variant="text"
                      @click="onSubmit()"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <br>
            <br>
            <v-divider></v-divider>
            <div>
              <v-row no-gutters>
                <v-col cols="12" sm="4" v-for="item in items" :key="item">
                  <v-sheet class="pa-2 ma-2">
                    <v-card
                    :title="item"
                    >
                    <v-row>
                        <v-col cols="12" sm="6">
                          <v-card-actions>
                            <v-btn
                              variant="text"
                              color="teal-accent-4"
                              to="/prelandsurveydetails"
                            >
                              View Details
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                        <v-col ccols="12" sm="6">
                          <v-card-actions>
                            <v-btn
                              variant="text"
                              color="blue-accent-4"
                              to="/prelandsurveyforms"
                            >
                              Add Details
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                    </v-row>
                    </v-card>
                  </v-sheet>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
   </v-card>
</div>
</template>
<script>
export default {
    data () {
        return {
            title:'',
            dialog: false,
            prelandsurveyName:'',
            items:['Pre Land Survey 01','Pre Land Survey 02', 'Pre Land Survey 03']
        }
    },
    methods:{
      onSubmit(){
        this.items.push(this.prelandsurveyName)
        this.prelandsurveyName = ''
        console.log(this.items)
      }
    }

}
</script>