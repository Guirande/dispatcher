<template>
    <div>
<!--      <div class="columns is-mobile">-->
<!--        <div class="column">-->
<!--          <h1>Your Coordinates:</h1>-->
<!--          <p>{{ userCoordinates.lat }} Latitude, {{ userCoordinates.lng }} Longitude</p>-->
<!--        </div>-->
<!--        <div class="column">-->
<!--          <h1>Map Coordinates:</h1>-->
<!--          <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>-->
<!--        </div>-->
<!--      </div>-->
      <div class="column is-full">
        <GmapMap
            :center="userCoordinates"
            :zoom="zoom"
            style="height:760px;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
      </div>
    </div>
</template>

<script>
export default {
  name: "Map",

  data() {
    return {
      map: null,
      zoom: 18,
      userCoordinates: {
        lat: -19.8208,
        lng: 34.8359
      },
    }
  },

  computed: {
    mapCoordinates() {
      if(!this.map) {
        return {
          lat: 0,
          lng: 0
        };
      } else
        return {
          lat: this.map.getCenter().lat().toFixed(4),
          lng: this.map.getCenter().lng().toFixed(4)
        }
    }
  },

  created() {
    //does the user have a saved map setting? use it instead of the default
    /*if(localStorage.reswan) {
      this.userCoordinates = JSON.parse(localStorage.reswan.userCoordinates);
      this.zoom = parseInt(localStorage.reswan.zoom);
    }*/

    //get user's coordinates from browser request
    /*this.$getLocation({})
        .then(coordinates => {
          this.userCoordinates = coordinates;
        })
        .catch(error => alert(error));*/
  },

  mounted() {
    //add the map to a data object
    this.$refs.mapRef.$mapPromise.then(map => this.map = map);
  },

  methods: {
    handleDrag() {
      //get center and zoom level, store in localstorage
      let center = {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4)
      };

      let zoom = this.map.getZoom();

      localStorage.reswan = JSON.stringify({userCoordinates: center, zoom: zoom});
    }
  }
}
</script>

<style scoped>

</style>