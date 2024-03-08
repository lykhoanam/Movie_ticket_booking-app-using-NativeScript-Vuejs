import Home from "../components/Home.vue";
import Search from "../components/Search.vue";
import Coupon from "../components/Coupon.vue";
import Profile from "../components/Profile.vue";

export default {
  components:{
    Home,
    Search,
    Coupon,
    Profile,
  },
  data() {
    return {
      tab: "Home",
      selectedButton: 'home',
    }
  },

  methods:{
    home(){
      this.tab = "Home";
      this.selectedButton = 'home';
    },
    search(){
      this.tab = "Search";
      this.selectedButton = 'search';
    },
    coupon(){
      this.tab = "Coupon";
      this.selectedButton = 'coupon';
    },
    profile(){
      this.tab = "Profile";
      this.selectedButton = 'profile';
    },
  }
}
