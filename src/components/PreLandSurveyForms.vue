<template>
    <div>
        <v-card>
            <v-tabs
            v-model="tab"
            bg-color="primary"
            >
            <v-tab value="one">Health and Safety</v-tab>
            <v-tab value="two">Land Description</v-tab>
            <v-tab value="three">Utility and Infra</v-tab>
            <v-tab value="four">Community and Surrounding Area</v-tab>
            </v-tabs>

            <v-card-text>
            <v-window v-model="tab">
            <v-form @submit="onSubmitSurvey"> 
                <v-window-item value="one">
                <v-card
                title="Health and Safety"
                >
                    <v-card-text>
                            <v-container>
                            <v-row>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="province_id"
                                :items="provinces"
                                item-title="text"
                                item-value="value"
                                label="Province"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="municipality_id"
                                :items="municipalities"
                                item-title="text"
                                item-value="value"
                                label="Municipality"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="barangay_id"
                                :items="barangays"
                                item-title="text"
                                item-value="value"
                                label="Barangay"
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="shortcodemaps"
                                    label="Short Code Maps"
                                    required
                                ></v-text-field>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="weather_id"
                                :items="weathers"
                                item-title="text"
                                item-value="value"
                                label="Weather Visited"
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="dateattend"
                                    label="Date you attend "
                                    required
                                    type="date"
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="timearrived"
                                    label="Time of arrival "
                                    required
                                    type="time"
                                ></v-text-field>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="isVisited_id"
                                :items="isVisited"
                                item-title="text"
                                item-value="value"
                                label="Can you proceed to visit the area"
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="temparrived"
                                    label="Temparature Arrived "
                                    required
                                    type="text"
                                ></v-text-field>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="cellreception_id"
                                :items="cellreception"
                                item-title="text"
                                item-value="value"
                                label="Is there a cell reception ( safety reason ) "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="safeareas_id"
                                :items="safeareas"
                                item-title="text"
                                item-value="value"
                                label="Is it safe to proceed to the area"
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-file-input
                                    v-model="healthsafile"
                                    show-size
                                    counter
                                    multiple
                                    label="File input"
                                ></v-file-input>
                                </v-col>
                            </v-row>
                            </v-container>
                    </v-card-text>
                </v-card>
                </v-window-item>

                <v-window-item value="two">
                <v-card
                title="Land Description"
                >
                    <v-card-text>
                            <v-container>
                            <v-row>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="topographylands_id"
                                :items="topographylands"
                                item-title="text"
                                item-value="value"
                                label="Topography of the land  "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="typelands_id"
                                :items="typelands"
                                item-title="text"
                                item-value="value"
                                label="Type of Land"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="visiblelands_id"
                                :items="visiblelands"
                                item-title="text"
                                item-value="value"
                                label="What is visible on the land "
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-text-field
                                    v-model="potentialuse"
                                    label="Potential use of the land in the future"
                                    required
                                ></v-text-field>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="historicals_id"
                                :items="historicals"
                                item-title="text"
                                item-value="value"
                                label="Historical nature "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                v-model="fencings_id"
                                :items="fencings"
                                item-title="text"
                                item-value="value"
                                label="Fencing"
                                ></v-select>
                                </v-col>
                                <v-col 
                                cols="12"
                                md="4">
                                <v-select
                                v-model="roadaccess_id"
                                :items="roadaccess"
                                item-title="text"
                                item-value="value"
                                label="Road Access "
                                ></v-select>
                                </v-col>
                                <v-col 
                                cols="12"
                                md="4">
                                <v-text-field
                                    v-model="landmark"
                                    label="Any key land marks "
                                    required
                                    type="text"
                                ></v-text-field>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-file-input
                                    v-model="landdescfile"
                                    show-size
                                    counter
                                    multiple
                                    label="Please attach 5  pictures of the area "
                                ></v-file-input>
                                </v-col>
                            </v-row>
                            </v-container>
                    </v-card-text>
                </v-card>
                </v-window-item>

                <v-window-item value="three">
                    <v-card
                    title="Utility Infra"
                    >
                        <v-card-text>
                                <v-container>
                                <v-row>
                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="accessareas_id"
                                    :items="accessareas"
                                    item-title="text"
                                    item-value="value"
                                    label="How did you access the area"
                                    ></v-select>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-text-field
                                        v-model="distancefromroad"
                                        label="What is the distance you travelled ( meters ) from road"
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="powerlinesnear_id"
                                    :items="powerlinesnear"
                                    item-title="text"
                                    item-value="value"
                                    label="Is there any power lines near by "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="powelinessize"
                                        label="Size of power lines are they ( guesstimate of meters )"
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="powerlinedistance"
                                        label="how are far are the power line from the area ( site ) "
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="nearestsubstation"
                                        label="Where is the nearest substation ( town ) "
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col 
                                    cols="12"
                                    md="4">
                                    <v-select
                                    v-model="isriverrunning_id"
                                    :items="isriverrunning"
                                    item-title="text"
                                    item-value="value"
                                    label="Is there a river running through the property "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="rivername"
                                        label="Name ( if known ) of river "
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="networkreception_id"
                                    :items="networkreception"
                                    item-title="text"
                                    item-value="value"
                                    label="Cell phone reception "
                                    ></v-select>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-file-input
                                        v-model="utilityfile"
                                        show-size
                                        counter
                                        multiple
                                        label="Please attach 5  pictures of the area "
                                    ></v-file-input>
                                    </v-col>
                                    
                                </v-row>
                                </v-container>
                        </v-card-text>
                </v-card>
                </v-window-item>
                <v-window-item value="four">
                    <v-card
                    title="Utility Infra"
                    >
                        <v-card-text>
                                <v-container>
                                <v-row>
                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="communitynear_id"
                                    :items="communitynear"
                                    item-title="text"
                                    item-value="value"
                                    label="Is there a community near by "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="communityfall_id"
                                    :items="communityfall"
                                    item-title="text"
                                    item-value="value"
                                    label="Does the community fall within the land"
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="isyescommunity"
                                        label="If yes. What is the size of the community ( in population)"
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    v-model="communitytype_id"
                                    :items="communitytype"
                                    item-title="text"
                                    item-value="value"
                                    label="Is the community ( what type ) "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="brgycaptainname"
                                        label="Who is barangay captain of the area (if known) "
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="chieftain"
                                        label="Who is local chieftain ( tribal if applicable)"
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="houseyousee"
                                        label="How many houses can you see ( if applicable ) "
                                        required
                                    ></v-text-field>
                                    </v-col>

                                    <v-col 
                                    cols="12"
                                    md="4">
                                    <v-select
                                    v-model="isapproach_id"
                                    :items="isapproach"
                                    item-title="text"
                                    item-value="value"
                                    label="Have you been approach ( by locals "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-text-field
                                        v-model="asksaid"
                                        label="If applicable ( what was said and asked ) "
                                    ></v-text-field>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-file-input
                                        v-model="communityfile"
                                        show-size
                                        counter
                                        multiple
                                        label="Please attach 5  pictures of the area "
                                    ></v-file-input>
                                    </v-col>
                                    
                                </v-row>
                                </v-container>
                            <v-row>
                                <v-col class="text-right">
                                    <v-btn type="submit"  class="mt-2">Submit</v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>

                </v-card>
                </v-window-item>
                </v-form>
            </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import { AxiosError, AdminSurveyService,} from '@/services'
export default{
    data () {
        return {
            tab: null,
            province_id:1,
            weather_id:1,
            municipality_id:1,
            barangay_id:1,
            provinces: [
                {text: 'Isabela', value:1},
                {text: 'Quirino', value:2}
            ],
            municipalities:[
                {text:'San Isidro', value:1 },
                {text:'Alicia', value:2},
                {text:'Echague', value:3}
            ],
            barangays:[
                {text:'Gomez', value:1 },
                {text:'Rizal East', value:2},
                {text:'San Fabian', value:3}
            ],
            weathers:[
                {text:'Sunny and Dry', value:1 },
                {text:'Raining', value:2},
                {text:'Flooding and Unreachable', value:3}
            ],
            isVisited_id:1,
            isVisited:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            cellreception_id:1,
            cellreception:[
                {text:'Yes' , value:1},
                {text:'No', value:2},
                {text:'Maybe', value:3}
            ],
            safeareas_id:1,
            safeareas:[                
                {text:'Yes' , value:1},
                {text:'No', value:0}],
            shortcodemaps: 'test',
            dateattend: "04/27/2023",
            timearrived: '10:30',
            temparrived:'30',
            landmark:'test',
            topographylands_id:1,
            topographylands:[
                {text:'Flat', value:1},
                {text:'Rolling Hills', value:2},
                {text:'Mountains', value:3},
                {text:'Part Flat and Steep Inclines', value:4}
            ],
            typelands_id:1,
            typelands:[
                {text:'Rice Land', value:1},
                {text:'Corn Land', value:2},
                {text:'Farmed land but not used ( visible farming of some kind )', value:3},
                {text:'Industrial Land',value:4}
            ],
            visiblelands_id:1,
            visiblelands:[
                {text:'Trees / fruit trees', value:1},
                {text:'grass and low level', value:2},
                {text:'natural forest but not forest zone ( possible growing of trees but not protected )', value:3},
                {text:'Brush and low level trees ( not significant )',value:4}    
            ],
            potentialuse:'potential use test',
            historicals_id:1,
            historicals:[
                {text:'Visbility of any local tribal settlement', value:1},
                {text:'Churches or churches of different religion', value:2},
                {text:'Local indengious tribal presence', value:3},
                {text:'Burial ground or visibility of any settlement',value:4}
            ],
            fencings_id:1,
            fencings:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            roadaccess_id:1,
            roadaccess:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            accessareas_id:1,
            accessareas:[
                {text:'took concrete road to edge of site', value:1},
                {text:'no road - walked x distance to the site', value:2},
                {text:'gravel path and track from main road', value:3},
                {text:'no road no path -  across un made area',value:4}
            ],
            distancefromroad:'20',
            powerlinesnear_id:1,
            powerlinesnear:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            powelinessize:'24',
            powerlinedistance:'22',
            nearestsubstation:'2',
            isriverrunning_id:1,
            isriverrunning:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            rivername:'test',
            networkreception_id:1,
            networkreception:[
                {text:'Smart' , value:1},
                {text:'Globe', value:2},
                {text:'Dito', value:3}
            ],
            communitynear_id:1,
            communitynear:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            communityfall_id:1,
            communityfall:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            isyescommunity:'tst',
            communitytype_id:1,
            communitytype:[
                {text:'Tribal' , value:1},
                {text:'Native', value:2},
                {text:'Local', value:3}    
            ],
            brgycaptainname:'dd',
            chieftain:'cc',
            houseyousee:'5',
            isapproach_id:1,
            isapproach:[
                {text:'Yes' , value:1},
                {text:'No', value:0}
            ],
            asksaid:'test',
            healthsafile:null,
            landdescfile:null,
            utilityfile:null,
            communityfile:null

        }
    },
    mounted(){
        // alert(this.$route.params.prelandcardId)
    },
    methods:{
         onSubmitSurvey(e){
            e.preventDefault()


            const formData = new FormData();
            this.healthsafile.forEach(x => {
                formData.append("healthSAFile",x);
            })
            this.landdescfile.forEach(x => {
                formData.append("landDescFile",x);
            })
            this.utilityfile.forEach(x => {
                formData.append("utilityFile",x);
            })
            this.communityfile.forEach(x => {
                formData.append("communityFile",x);
            })

            formData.append("Provinceid",this.province_id)
            formData.append("MunicipalityId",this.municipality_id)
            formData.append("BarangayId",this.barangay_id)
            formData.append("WeatherVisitedId",this.weather_id)
            formData.append("DateAttend",this.dateattend)
            formData.append("TimeArrival",this.timearrived)
            formData.append("CallReception", this.cellreception_id)
            formData.append("IsSafeProceedArea",this.safeareas_id)
            formData.append("TopographyLandId",this.topographylands_id)
            formData.append("TypeOfLandId",this.typelands_id)
            formData.append("VisibleOnLandId",this.visiblelands_id)
            formData.append("HistoricalNatureId",this.historicals_id)
            formData.append("Fencing",this.fencings_id)
            formData.append("GateRoadAccess",this.roadaccess_id)
            formData.append("LandMark",this.landmark)     
            formData.append("AccessAreaId",this.accessareas_id)
            formData.append("DistanceFromRoad",this.distancefromroad)
            formData.append("IsNearPowerLines",this.powerlinesnear_id)
            formData.append("IsRiverRunning",this.isriverrunning_id)
            formData.append("RiverName",this.rivername)
            formData.append("CellReceptionName",this.networkreception_id)
            formData.append("CommunityNearby",this.communitynear_id)
            formData.append("CommunityFallLand",this.communityfall_id)
            formData.append("CommunityTypeId",this.communitytype_id)
            formData.append("BarangayCaptain",this.brgycaptainname)
            formData.append("LocalChieftain",this.chieftain)
            formData.append("HouseNumYouSee",this.houseyousee)
            formData.append("IsApproachByLocal",this.isapproach_id)
            formData.append("IsSaidAndAskLocal",this.asksaid)
            formData.append("PotentialUseLandFuture",this.potentialuse)
            formData.append("NearestSubstation",this.nearestsubstation)
            formData.append("ShortCodeMap",this.shortcodemaps)
            formData.append("SizCommuPopulation",this.isyescommunity)
            formData.append("SizePowerLine",this.powelinessize)
            formData.append("TemperatureArrived",this.temparrived)
            formData.append("PreLandSurveyId",this.$route.params.prelandcardId)

            AdminSurveyService.post(formData).then(response => {
                console.log(response);
                alert("Successfully save details")
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