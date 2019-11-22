import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import UserProfile from "@/pages/UserProfile.vue";
import Suivi from "@/pages/Suivi.vue";
import Cours from "@/pages/Cours.vue";
import Emplois from "@/pages/Emplois.vue";
import Deliberation from "@/pages/Deliberation.vue";
import Encadrement from "@/pages/Encadrement.vue";
import Parametres from "@/pages/Parametres.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "user",
        name: "Profile",
        component: UserProfile
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: Suivi
      },
      
      {
        path: "table",
        name: "Table List",
        component: Cours
      },
      {
        path: "typography",
        name: "Typography",
        component: Emplois
      },
      {
        path: "icons",
        name: "Icons",
        component: Deliberation
      },

        {
          path: "maps",
          name: "maps",
          component: Encadrement
        },
        {
          path: "notifications",
          name: "notifications",
          component: Parametres
        },
        
    ]
  }
];

export default routes;
