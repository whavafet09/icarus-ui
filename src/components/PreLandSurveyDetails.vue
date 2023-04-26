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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis luctus felis, sed tincidunt nisl ultrices et. 
                    Vivamus blandit vulputate fermentum. Cras eu nibh in quam sodales lacinia vel id erat. Curabitur in suscipit ex. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula iaculis turpis in vulputate. Quisque scelerisque risus
                    non pharetra aliquet. Fusce pharetra dapibus tincidunt.Fusce dictum, ex a sagittis auctor, est odio tristique neque, 
                    a commodo magna augue tristique ante. Integer dapibus ornare quam ut bibendum. Quisque iaculis orci nec justo condimentum, 
                    nec scelerisque justo laoreet. Nam volutpat est non condimentum pharetra. Integer et mollis purus, et scelerisque nisi. 
                    Phasellus molestie tortor sit amet posuere sagittis. In venenatis congue tellus, vel rutrum arcu porta sed. Mauris ipsum 
                    turpis, cursus interdum eleifend ut, feugiat quis ex. Donec lacinia ullamcorper tellus sed scelerisque. Nulla facilisi.
                    Nulla iaculis mattis enim, non sodales purus facilisis eget. Sed odio ex, scelerisque nec feugiat mattis, finibus et mi.
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
          <v-card
          >
            <v-card-title class="text-h5">
              Land Description
            </v-card-title>

                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis luctus felis, sed tincidunt nisl ultrices et. 
                    Vivamus blandit vulputate fermentum. Cras eu nibh in quam sodales lacinia vel id erat. Curabitur in suscipit ex. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula iaculis turpis in vulputate. Quisque scelerisque risus
                    non pharetra aliquet. Fusce pharetra dapibus tincidunt.Fusce dictum, ex a sagittis auctor, est odio tristique neque, 
                    a commodo magna augue tristique ante. Integer dapibus ornare quam ut bibendum. Quisque iaculis orci nec justo condimentum, 
                    nec scelerisque justo laoreet. Nam volutpat est non condimentum pharetra. Integer et mollis purus, et scelerisque nisi. 
                    Phasellus molestie tortor sit amet posuere sagittis. In venenatis congue tellus, vel rutrum arcu porta sed. Mauris ipsum 
                    turpis, cursus interdum eleifend ut, feugiat quis ex. Donec lacinia ullamcorper tellus sed scelerisque. Nulla facilisi.
                    Nulla iaculis mattis enim, non sodales purus facilisis eget. Sed odio ex, scelerisque nec feugiat mattis, finibus et mi.
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
          <v-card
          >
            <v-card-title class="text-h5">
              Utility and Infra
            </v-card-title>

                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis luctus felis, sed tincidunt nisl ultrices et. 
                    Vivamus blandit vulputate fermentum. Cras eu nibh in quam sodales lacinia vel id erat. Curabitur in suscipit ex. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula iaculis turpis in vulputate. Quisque scelerisque risus
                    non pharetra aliquet. Fusce pharetra dapibus tincidunt.Fusce dictum, ex a sagittis auctor, est odio tristique neque, 
                    a commodo magna augue tristique ante. Integer dapibus ornare quam ut bibendum. Quisque iaculis orci nec justo condimentum, 
                    nec scelerisque justo laoreet. Nam volutpat est non condimentum pharetra. Integer et mollis purus, et scelerisque nisi. 
                    Phasellus molestie tortor sit amet posuere sagittis. In venenatis congue tellus, vel rutrum arcu porta sed. Mauris ipsum 
                    turpis, cursus interdum eleifend ut, feugiat quis ex. Donec lacinia ullamcorper tellus sed scelerisque. Nulla facilisi.
                    Nulla iaculis mattis enim, non sodales purus facilisis eget. Sed odio ex, scelerisque nec feugiat mattis, finibus et mi.
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
          <v-card
          >
            <v-card-title class="text-h5">
              Community and Surrounding Area
            </v-card-title>

                <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis luctus felis, sed tincidunt nisl ultrices et. 
                    Vivamus blandit vulputate fermentum. Cras eu nibh in quam sodales lacinia vel id erat. Curabitur in suscipit ex. Lorem 
                    ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula iaculis turpis in vulputate. Quisque scelerisque risus
                    non pharetra aliquet. Fusce pharetra dapibus tincidunt.Fusce dictum, ex a sagittis auctor, est odio tristique neque, 
                    a commodo magna augue tristique ante. Integer dapibus ornare quam ut bibendum. Quisque iaculis orci nec justo condimentum, 
                    nec scelerisque justo laoreet. Nam volutpat est non condimentum pharetra. Integer et mollis purus, et scelerisque nisi. 
                    Phasellus molestie tortor sit amet posuere sagittis. In venenatis congue tellus, vel rutrum arcu porta sed. Mauris ipsum 
                    turpis, cursus interdum eleifend ut, feugiat quis ex. Donec lacinia ullamcorper tellus sed scelerisque. Nulla facilisi.
                    Nulla iaculis mattis enim, non sodales purus facilisis eget. Sed odio ex, scelerisque nec feugiat mattis, finibus et mi.
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
    </v-container>
  </v-card>
</div>
</template>
<script>

export default {
    components:{
        
    },
    data() {
        return {
            reveal: false,
            reveal2: false,
            reveal3: false,
            reveal4: false,

        }
        
    },
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