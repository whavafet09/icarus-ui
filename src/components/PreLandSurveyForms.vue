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
            <v-form>
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
                                :items="provinces"
                                label="Province"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="municipalities"
                                label="Municipality"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="barangays"
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
                                :items="weathers"
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
                                :items="isVisited"
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
                                :items="cellreception"
                                label="Is there a cell reception ( safety reason ) "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="safearea"
                                label="Is it safe to proceed to the area"
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                md="4"
                                >
                                <v-file-input
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
                                :items="topographylands"
                                label="Topography of the land  "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="typelands"
                                label="Type of Land"
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="visiblelands"
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
                                :items="historicals"
                                label="Historical nature "
                                ></v-select>
                                </v-col>
                                <v-col cols="12"
                                md="4">
                                <v-select
                                :items="fencings"
                                label="Fencing"
                                ></v-select>
                                </v-col>
                                <v-col 
                                cols="12"
                                md="4">
                                <v-select
                                :items="roadaccess"
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
                                    :items="accessareas"
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
                                    :items="powerlinesnear"
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
                                    :items="isriverrunning"
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
                                    :items="networkreception"
                                    label="Cell phone reception "
                                    ></v-select>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="4"
                                    >
                                    <v-file-input
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
                                    :items="communitynear"
                                    label="Is there a community near by "
                                    ></v-select>
                                    </v-col>

                                    <v-col cols="12"
                                    md="4">
                                    <v-select
                                    :items="communityfall"
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
                                    :items="communitytype"
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
                                    :items="isapproach"
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
export default {
    data () {
        return {
            tab: null,
            provinces: ['Isabela', 'Quirino', 'Cagayan', 'Nueva Ecija'],
            municipalities:['San Isidro','Alicia','Echague'],
            barangays:['Gomez','Rizal East','San Fabian'],
            weathers:['Sunny and Dry','Raining','High Winds and Raining','Flooding and Unreachable'],
            isVisited:['Yes','No'],
            cellreception:['Yes','No','Maybe'],
            safearea:['Yes','No'],
            shortcodemaps: '',
            dateattend: '',
            timearrived: '',
            temparrived:'',
            landmark:'',
            topographylands:[
                'Flat',
                'Rolling Hills',
                'Mountains',
                'Part Flat and Steep Inclines'
            ],
            typelands:['Rice Land',
                'Corn Land',
                'Farmed land but not used ( visible farming of some kind )',
                'Industrial Land'
            ],
            visiblelands:['Trees / fruit trees',
                'grass and low level',
                'natural forest but not forest zone ( possible growing of trees but not protected )',
                'Brush and low level trees ( not significant )'
            ],
            historicals:[
                'Visbility of any local tribal settlement',
                'Churches or churches of different religion',
                'Local indengious tribal presence',
                'Burial ground or visibility of any settlement'],
            fencings:['Yes','No'],
            roadaccess:['Yes','No'],
            accessareas:[
                'took concrete road to edge of site',
                'no road - walked x distance to the site',
                'gravel path and track from main road',
                'no road no path -  across un made area'
            ],
            distancefromroad:'',
            powerlinesnear:[],
            powelinessize:'',
            powerlinedistance:'',
            nearestsubstation:'',
            isriverrunning:['Yes','No'],
            rivername:'',
            networkreception:['Smart','Globe','Dito'],
            communitynear:['Yes','No'],
            communityfall:['Yes','No'],
            isyescommunity:'',
            communitytype:['Tribal','Native','Local'],
            brgycaptainname:'',
            chieftain:'',
            houseyousee:'',
            isapproach:['Yes','No'],
            asksaid:''












    
        }
    }
}
</script>