<template>
    <div>
      <v-card
          class="mx-auto"
          prepend-icon="mdi-home"
      >
                <template v-slot:title>
                Projects List
                </template>
                <v-card-text>
                <div>
                  <v-row no-gutters>
                    <v-col cols="12" sm="4" v-for="item in prelandsurveyheaders" :key="item.value">
                      <v-sheet class="pa-2 ma-2">
                        <v-card
                        :title="'Project -00'+item.value"
                        >
                        <v-row>
                            <v-col cols="12" sm="6">
                              <v-card-actions>
                                <router-link :to="{name: 'prelandsurveydetailsCard',params:{prelandcardId:item.value}}">  
                                  <v-btn
                                    variant="text"
                                    color="teal-accent-4"
                                  >
                                    View Details
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