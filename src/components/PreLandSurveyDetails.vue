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
                    <h3>Provinces : <span>{{ province }}</span></h3>
                    <h3>Municipality : <span>{{ municipality }}</span></h3>
                    <h3>Barangay : <span>{{ barangay }}</span></h3>
                    <h3>Short code - google maps : <span>{{ short_code }} </span></h3>
                    <h3>What is the weather when you visited : <span>{{ weather }}</span></h3>
                    <h3>Date you attend : <span>{{ date_attend }}</span> </h3>
                    <h3>Time of arrival : <span>{{ time_arrival }}</span></h3>
                    <!-- <h3>Can you proceed to visit the area : {{ is_visit }}</h3> -->
                    <h3>Temperature of area when you arrived : <span>{{ temp_arrived }}</span></h3>
                    <h3>Is there a cell reception ( safety reason ) : <span>{{ is_cell_reception }}</span></h3>
                    <h3>Is it safe to proceed to the area : <span>{{ is_safe }}</span></h3>
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
                                <a href="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" target="_blank" download>
                                    <div class="icon-holder icon-download">attachment1</div>
                                </a>
                                <!-- <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                height="200px"
                                ></v-img> -->
                            </v-col>
                            <v-col cols="12" sm="4">
                                <a href="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg" target="_blank" download>
                                    <div class="icon-holder icon-download">attachment2</div>
                                </a>
                            </v-col>
                            <v-col cols="12" sm="4">
                                <a href="https://cdn.vuetifyjs.com/images/cards/cooking.png" target="_blank" download>
                                    <div class="icon-holder icon-download">attachment3</div>
                                </a>
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
                    <h3>Topography of the land : <span>{{ topography_land }}</span></h3>
                    <h3>Type of land : <span>{{ type_land }}</span></h3>
                    <h3>Potential use of the land in the future : <span>{{ potential_use }}</span></h3>
                    <h3>What is visible on the land : <span>{{ visible_land }}</span></h3>
                    <h3>Historical nature : <span>{{ historical_nature }}</span></h3>
                    <h3>Fencing : <span>{{ is_fencing }}</span></h3>
                    <h3>Gate access or road access : <span>{{ is_road_access }}</span></h3>
                    <h3>Any key land marks : <span>{{ land_mark }}</span></h3>
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
                    <h3>How did you access the area : <span>{{ is_access_area }}</span></h3>
                    <h3>What is the distance you travelled ( meters ) from road : <span>{{ distance_road }}</span></h3>
                    <h3>Is there any power lines near by : <span>{{ is_near_powerlines }}</span></h3>
                    <h3>Size of power lines are they ( guesstimate of meters ) : <span>{{ size_powerlines }}</span></h3>
                    <!-- <h3>how are far are the power line from the area ( site ) : {{ far_powerlines }}</h3> -->
                    <h3>Where is the nearest substation ( town ) : <span>{{ near_substation }}</span></h3>
                    <h3>Is there a river running through the property : <span>{{ is_river_running }}</span></h3>
                    <h3>Name ( if known ) of river : <span>{{ river_name }}</span></h3>
                    <h3>Cell phone reception name : <span>{{ cell_reception_name }}</span></h3>
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
                    <h3>Is there a community near by : <span>{{ is_near_community }}</span></h3>
                    <h3>Does the community fall within the land : <span>{{ is_community_fall }}</span></h3>
                    <h3>If yes. What is the size of the community ( in population) : <span>{{ size_community }}</span></h3>
                    <h3>Is the community ( what type ) : <span>{{ community_type }}</span></h3>
                    <h3>Who is barangay captain of the area (if known) : <span>{{ captain_name }}</span></h3>
                    <h3>Who is local chieftain ( tribal if applicable) : <span>{{ chieftain_name }}</span></h3>
                    <h3>How many houses can you see ( if applicable ) : <span>{{ house_see }}</span></h3>
                    <h3>Have you been approach ( by locals ) : <span>{{ is_approach }}</span></h3>
                    <h3>If applicable ( what was said and asked ) : <span>{{ said_ask }}</span></h3>
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
            date_attend:'',
            time_arrival:'',
            is_visit:'',
            temp_arrived:'',
            is_cell_reception:'',
            is_safe:'',
            topography_land:'',
            type_land:'',
            potential_use:'',
            visible_land:'',
            historical_nature:'',
            is_fencing:'',
            is_road_access:'',
            land_mark:'',
            is_access_area:'',
            distance_road: '',
            is_near_powerlines: '',
            size_powerlines: '',
            // far_powerlines:'',
            near_substation:'',
            is_river_running:'',
            river_name:'',
            cell_reception_name:'',
            is_near_community:'',
            is_community_fall:'',
            size_community:'',
            community_type:'',
            captain_name: '',
            chieftain_name:'',
            house_see:'',
            is_approach:'',
            said_ask:'',
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
            this.date_attend = data[0].dateYouAttend
            this.time_arrival = data[0].timeArrived
            // this.is_visit = data[0].
            this.temp_arrived = data[0].temperature
            this.is_cell_reception = data[0].callReception == 1 ? 'YES': 'NO'
            this.is_safe = data[0].isSafe == 1 ? 'YES': 'NO'
            this.topography_land = data[0].topographyLands.topographyLandDescription
            this.type_land = data[0].typeLands.landType
            this.potential_use = data[0].potentialUse
            this.visible_land = data[0].visibleOnLands.visibleLandDescription
            this.historical_nature = data[0].historicNatures.historicalNatureDescription
            this.is_fencing = data[0].fecings == 1 ? 'YES': 'NO'
            this.is_road_access = data[0].roadAccess == 1 ? 'YES': 'NO'
            this.land_mark = data[0].landMarks
            this.is_access_area = data[0].accessArea.accessAreaDescription
            this.distance_road = data[0].dFromRoad
            this.is_near_powerlines = data[0].nearPowerLine == 1 ? 'YES': 'NO'
            this.size_powerlines = data[0].sizePowerLine
            // this.far_powerlines = data[0]
            this.near_substation = data[0].nearSubstation
            this.is_river_running = data[0].riverRunning == 1 ? 'YES': 'NO'
            this.river_name = data[0].riverName
            this.cell_reception_name = data[0].receptionName == 1 ? 'SMART': data[0].receptionName == 2 ? 'Globe' : 'OTHER'
            this.is_near_community = data[0].communityNear == 1 ? 'YES': 'NO'
            this.is_community_fall = data[0].communityFallLand == 1 ? 'YES': 'NO'
            this.size_community = data[0].sizePopulation
            this.community_type = data[0].communityType.communityTypeName
            this.captain_name = data[0].bCaptainName
            this.chieftain_name = data[0].lChieftain
            this.house_see = data[0].hYouSee
            this.is_approach = data[0].aByLocal == 1 ? 'YES': 'NO'
            this.said_ask = data[0].lSaidAsk
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
span{
    color:black;
    margin-left: 5px;
    font-size: 14px;
}
h3{
    color:rgb(79, 79, 79)
}
</style>