import { reactive } from "vue";
import frontend from "../assets/images/career/front-end 1.png";
import backend from "../assets/images/career/seo-and-web 1.png";
import mobile from "../assets/images/career/mobile-development 1.png";
import devops from "../assets/images/career/devops 1.png";
import pm from "../assets/images/career/project 1.png";
import qc from "../assets/images/career/qc 1.png";
import python from "../assets/images/career/python 1.png";
import ui from "../assets/images/career/ui 1.png";

export const career = reactive({
  state: [
    { title: "Front End Developer", image: frontend, url: "/career/front-end" },
    { title: "Back End Developer", image: backend, url: "/career" },
    { title: "Mobile Apps Developer", image: mobile, url: "/career" },
    { title: "DevOps Engineer", image: devops, url: "/career" },
    { title: "Project Manager", image: pm, url: "/career" },
    { title: "Quality Control", image: qc, url: "/career" },
    { title: "Python Developer", image: python, url: "/career" },
    { title: "UI UX Designer", image: ui, url: "/career" },
  ],
});
