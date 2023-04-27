<template>
<div>
    <v-card
    class="mx-auto"
    title="Pre Land Survey 01 Details"
  >
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
          >
            <v-card-title class="text-h5">
              Health and Safety
            </v-card-title>

                <v-card-text>
                    <h3>Provinces : {{ province }}</h3>
                    <h3>Municipality : {{ municipality }}</h3>
                    <h3>Barangay : {{ barangay }}</h3>
                    <h3>Short code - google maps : {{ short_code }} </h3>
                    <h3>What is the weather when you visited : {{ weather }}</h3>
                    <h3>Date you attend : </h3>
                    <h3>Time of arrival : </h3>
                    <h3>Can you proceed to visit the area : </h3>
                    <h3>Temperature of area when you arrived : </h3>
                    <h3>Is there a cell reception ( safety reason ) : </h3>
                    <h3>Is it safe to proceed to the area : </h3>
                </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="reveal = true">
                View Attachment
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                height="200px"
                                ></v-img>
                            </v-col>
                        </v-row>
    
                        
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
          </v-card>
          <br>
          <v-card
          >
            <v-card-title class="text-h5">
              Land Description
            </v-card-title>

                <v-card-text>
                    <h3>Topography of the land :</h3>
                    <h3>Type of land :</h3>
                    <h3>Potential use of the land in the future :</h3>
                    <h3>What is visible on the land :</h3>
                    <h3>Historical nature :</h3>
                    <h3>Fencing :</h3>
                    <h3>Gate access or road access :</h3>
                    <h3>Any key land marks :</h3>
                </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="reveal2 = true">
                View Attachment
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card
                    v-if="reveal2"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                height="200px"
                                ></v-img>
                            </v-col>
                        </v-row>
    
                        
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal2 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
          </v-card>
          <br>
          <v-card
          >
            <v-card-title class="text-h5">
              Utility and Infra
            </v-card-title>

                <v-card-text>
                    <h3>How did you access the area :</h3>
                    <h3>What is the distance you travelled ( meters ) from road :</h3>
                    <h3>Is there any power lines near by :</h3>
                    <h3>Size of power lines are they ( guesstimate of meters ) :</h3>
                    <h3>how are far are the power line from the area ( site ) :</h3>
                    <h3>Where is the nearest substation ( town ) :</h3>
                    <h3>Is there a river running through the property :</h3>
                    <h3>Name ( if known ) of river :</h3>
                    <h3>Cell phone reception :</h3>
                </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="reveal3 = true">
                View Attachment
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card
                    v-if="reveal3"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                height="200px"
                                ></v-img>
                            </v-col>
                        </v-row>
    
                        
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal3 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
          </v-card>
          <br>
          <v-card
          >
            <v-card-title class="text-h5">
              Community and Surrounding Area
            </v-card-title>

                <v-card-text>
                    <h3>Is there a community near by :</h3>
                    <h3>Does the community fall within the land :</h3>
                    <h3>If yes. What is the size of the community ( in population) :</h3>
                    <h3>Is the community ( what type ) :</h3>
                    <h3>Who is barangay captain of the area (if known) :</h3>
                    <h3>Who is local chieftain ( tribal if applicable) :</h3>
                    <h3>How many houses can you see ( if applicable ) :</h3>
                    <h3>Have you been approach ( by locals ) :</h3>
                    <h3>If applicable ( what was said and asked ) :</h3>
                    <h3></h3>
                </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="reveal4 = true">
                View Attachment
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
                <v-card
                    v-if="reveal4"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;"
                >
                    <v-card-text class="pb-0">
                        <v-row>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
                                height="200px"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                height="200px"
                                ></v-img>
                            </v-col>
                        </v-row>
    
                        
                    </v-card-text>
                    <v-card-actions class="pt-0">
                    <v-btn
                        text
                        color="teal accent-4"
                        @click="reveal4 = false"
                    >
                        Close
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <div>
        <v-row>
            <v-col cols="12" md="6" xs="3">
                <v-btn style="margin-right: 20px; background-color:green;color:white;">Approved</v-btn>
                <v-btn class="red" style="background-color:red;color:white;">Reject</v-btn>
            </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</div>
</template>
<script>
import { AdminSurveyService,} from '@/services'
export default {
    components:{
        
    },
    data() {
        return {
            reveal: false,
            reveal2: false,
            reveal3: false,
            reveal4: false,
            province:'',
            municipality:'',
            barangay:'',
            short_code:'',
            weather:'',
            prelandsurveydetails:[]
            

        }
        
    },
    mounted() {
        this.fetchPreLandSurveyDetails()
    },
    methods:{
        async fetchPreLandSurveyDetails () {
            const obj = {
                Id:this.$route.params.prelandcardId
            }
        await AdminSurveyService.get(obj).then(({ data }) => {
            this.province = data[0].provinces.provinceName
            this.municipality = data[0].municipalities.municipalityName
            this.barangay = data[0].barangays.barangayName
            this.short_code = data[0].shorthCode
            this.weather = data[0].weather.weatherDescription
            console.log(data);
            // this.prelandsurveydetails.push(data)

            
        })
        },
    }
}
</script>
<style scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>