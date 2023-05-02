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
                        Create Pre Land Survey
                        </v-btn>
                      </v-col>
                  </v-row>

                </template>
                <v-card>
                  <v-form @submit.prevent="onSubmitSurveyCard()">
                  <v-card-title>
                    <span class="text-h5">Create Pre Land Survey</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                        >
                       
                          <v-text-field
                            v-model="prelandsurveyName"
                            label="Pre Land Survey Name"
                          ></v-text-field>
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
                      type="submit"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-form>
                </v-card>
              </v-dialog>
            </v-row>
            <br>
            <br>
            <v-divider></v-divider>
            <div>
              <v-row no-gutters>
                <v-col cols="12" sm="4" v-for="item in prelandsurveyheaders" :key="item.value">
                  <v-sheet class="pa-2 ma-2" >
                    <v-card
                    :title="item.text"
                    >
                    <v-row>
                        <v-col cols="12" md="6" sm="3">
                          <v-card-actions>
                            <router-link :to="{name: 'prelandsurveydetailsCard',params:{prelandcardId:item.value}}">  
                              <v-btn
                                variant="text"
                                color="teal-accent-4"
                              >
                                View Details
                              </v-btn>
                            </router-link>
                            <router-link :to="{name: 'prelandsurveyformsCard',params:{prelandcardId:item.value}}">
                            <v-btn
                                variant="text"
                                color="blue-accent-4"
                              >
                                Add Details
                              </v-btn>
                            </router-link>
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
import { AxiosError, AdminHeaderSurveyService,} from '@/services'
export default {
    data () {
        return {
            title:'',
            dialog: false,
            prelandsurveyName:'',
            prelandsurveyheaders:[]
        }
    },
    mounted(){
      this.fetchPreLandSurveyHeader()
    },
    methods:{
      async fetchPreLandSurveyHeader () {
      await AdminHeaderSurveyService.get().then(({ data }) => {
        console.log(data);
        data.forEach(item => {
          this.prelandsurveyheaders.push({
            value: item.id,
            text: item.preLandSurveyCode
          })
        })
      })
    },
      async onSubmitSurveyCard(){
        const obj ={
          PreLandSurveyCode:this.prelandsurveyName,
          UserId:1,
          Status:true,
          Active:true
        }
       await AdminHeaderSurveyService.post(obj).then(response => {
                console.log(response);
                alert("Successfully Save");
                this.prelandsurveyName = ''
                this.dialog = false
                this.$router.go()
                
        }).catch(error => {
            if (error instanceof AxiosError) {
            if (error.code === 422) {
                this.$refs.form.setErrors(error.message)
            }
            }
            this.isBusy = false
        })
      }
    }

}
</script>