import { reactive } from "vue";
import team1 from "../assets/images/team-1.png";
import team2 from "../assets/images/team-2.png";
import team3 from "../assets/images/team-3.png";

export const team = reactive({
  detail: [
    { image: team3, name: "Elisabeth Be", role: "COO" },
    { image: team1, name: "Andree Wijaya", role: "CEO/CTO" },
    { image: team2, name: "Sanjaya Wahono", role: "CFO" },
  ],
});
