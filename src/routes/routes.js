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
        name: "Suivi",
        component: Suivi
      },
      
      {
        path: "table",
        name: "Cours",
        component: Cours
      },
      {
        path: "typography",
        name: "Emplois du temps",
        component: Emplois
      },
      {
        path: "icons",
        name: "Délibération",
        component: Deliberation
      },

        {
          path: "maps",
          name: "Encadrement",
          component: Encadrement
        },
        {
          path: "notifications",
          name: "Paramètres",
          component: Parametres
        },
        
    ]
  }
];

export default routes;
