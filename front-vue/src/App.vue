<template>
  <div id="root">
    <div
      id="topnav"
      class="topnav"
    >
      <router-link to="/">
        <img
          src="https://res.cloudinary.com/dmoacy4yl/image/upload/c_thumb,w_200,g_face/v1661781662/inkable_rectangle_but7iu.png"
          alt=""
        >
      </router-link>
        
      <!-- Classic Menu -->
     
      <nav
        id="topnav_menu"
        class="d-none d-lg-flex"
        role="navigation"
      >
        <NavItems />
        <NavButtons />
      </nav>

      <a
        id="topnav_hamburger_icon"
        class="d-block d-lg-none"
        @click="showResponsiveMenu"
      >
        <!-- Some spans to act as a hamburger -->
        <span />
        <span />
        <span />
      </a>

      <!-- Responsive Menu -->
      <nav
        id="topnav_responsive_menu"
        role="navigation"
      >
        <ul>
          <NavItems />
          <NavButtons />
        </ul>
      </nav>
    </div>
  </div>
  <div class="row d-flex align-items-center h-100 mx-3 ">
    <div class="d-flex col-xl-3 col-md-4 ">
      <AmBreadcrumbs>
        <template #crumb="{ crumb }">
          <router-link
            class="my-custom-crumb"
            :to="crumb.link"
          >
            {{ crumb.label }} /
          </router-link>
        </template>
      </AmBreadcrumbs>
    </div>
  </div>
  <router-view />

  <footer class="text-center text-lg-start bg-light text-muted">
    <!-- Copyright -->
    <div
      class="text-center p-4"
      style="background-color:white;"
    >
      © 2022 Copyright:
      <a
        class="text-reset fw-bold"
        href="/createurs"
      >Créateurs du projet Inkable</a>
    </div>
  <!-- Copyright -->
  </footer>
</template>

<script>


import NavItems from './components/NavItems.vue';
import NavButtons from './components/NavButtons.vue';
export default {
    name: 'App',
    components:{NavItems,NavButtons},
    computed:{
        user() {
            return this.$store.state.user
        },
        cities(){
            return this.$store.state.cities
        }
    },
    updated(){
        console.log("updated");
    },
    async created(){  
        // console.log(AmBreadcrumbs)
        const token=localStorage.getItem("token");
        //met le token dans le header 
        this.axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
        // try {
        //     await this.$store.dispatch('getUser');
        //     console.log(await this.$store.state.user)
        // } catch (error) {
        //     console.log(error)
        // }
        // console.log(this.$store.state.user)
        this.$store.dispatch('getAllStyles');
        this.$store.dispatch('getAllCities');


    },
    methods:{
        showResponsiveMenu() {
            const menu = document.getElementById("topnav_responsive_menu");
            const icon = document.getElementById("topnav_hamburger_icon");
            const root = document.getElementById("root");
            if (menu.className === "") {
                menu.className = "open";
                icon.className = "open";
                root.style.overflowY = "hidden";
            } else {
                menu.className = "";                    
                icon.className = "";
                root.style.overflowY = "";
            }
        },
        deconnect(){

            this.$store.dispatch('logout');
        }
    }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  
}

.bi {
  color: white;

}
/* ******************** NAV BAR ******************** */
.topnav {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#topnav_menu{
  display: flex;
  align-items: center;
  gap:2em;
}
.topnav_link {
  color: rgb(18, 18, 18);

  text-decoration: none;
}
.topnav_link:hover {
  color: #0078b4;
}

/* hide responsive menu */
#topnav_hamburger_icon,
#topnav_responsive_menu {
  display: none;
}

@media only screen and (max-width: 992px) {
  /* hide classic menu */
  #topnav_menu {
    display: none;
  }

  /* position home link at left and hamburger at right */
  #home_link {
    flex-grow: 1;
  }

  /* disable horizontal scrolling  */
  #root {
    position: relative;
    overflow-x: hidden;
  }

  /* show responsive menu and position at the right of the screen */
  #topnav_responsive_menu {
    display: block;
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    z-index: 99;

    transform-origin: 0% 0%;
    transform: translate(200%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #topnav_responsive_menu ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1em;
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;

    min-width: 50vw;
    height: 100vh;
    padding: 56px 0 0;

    text-align: center;

    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
  }

  #topnav_responsive_menu li {
    margin: 5px 5px;
  }

  #topnav_responsive_menu a {
    white-space: nowrap;
    color: #333;
    text-decoration: none;
  }

  /* And let's slide it in from the right */
  #topnav_responsive_menu.open {
    transform: none;
    position: fixed;
  }

  /* ******************** HAMBURGER ICON ******************** */
  /* define size and position of the hamburger link */
  #topnav_hamburger_icon {
    display: block;
    position: relative;
    margin: 16px;
    width: 33px;
    height: 28px;
    
    z-index: 100;
    
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  /* define the style (size, color, position, animation, ...) of the 3 spans */
  #topnav_hamburger_icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    margin-bottom: 5px;
 
    background: #333;
    border-radius: 3px;
    
    z-index: 100;

    opacity: 1;
    left: 0;

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  /* set the 3 spans position to look like a hamburger */
  #topnav_hamburger_icon span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
  }
  #topnav_hamburger_icon span:nth-child(2) {
    top: 12px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
  #topnav_hamburger_icon span:nth-child(3) {
    top: 24px;
    -webkit-transform-origin: left bottom;
    -moz-transform-origin: left bottom;
    -o-transform-origin: left bottom;
    transform-origin: left bottom;
  }

  /* change color when opening the menu */
  #topnav_hamburger_icon.open span {
    
  }

  /* the first span rotates 45° \ */
  #topnav_hamburger_icon.open span:nth-child(1) {
    width: 110%;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  /* the second span disappears */
  #topnav_hamburger_icon.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  /* the last span rotates -45° / */
  #topnav_hamburger_icon.open span:nth-child(3) {
    width: 110%;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
}
@media only screen and (max-width: 700px) {
  body{
    font-size: small !important;
  }
.calendar-app{
  font-size:xx-small !important;
}
.fc-toolbar-chunk{
  display: flex;
  flex-direction: column;
  gap:0.2em;
}
}
/* style="background-color: rgba(37, 117, 252, 1 */
</style>
