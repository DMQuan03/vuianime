import CREATEFILMS from "../admin/page/createvideo"
import ConfigRoutes from "../config/config.routes"
import HOMEPAGE from "../pages/Home"
import ALLFILMS from "../pages/allFilms"
import DETAIL from "../pages/detail"
import INTROFILMS from "../pages/intro"

const PublicRoutes = [
    { path : ConfigRoutes.homepage, component : HOMEPAGE},
    { path : ConfigRoutes.allFilms, component : ALLFILMS},
    { path : ConfigRoutes.intro, component : INTROFILMS},
    { path : ConfigRoutes.detail, component : DETAIL},
]

export const AdminRoutes = [
    {path : "/createvideoadmin123dsfrtyasd", component : CREATEFILMS}
]

export default PublicRoutes