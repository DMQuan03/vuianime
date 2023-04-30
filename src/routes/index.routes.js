import { Fragment } from "react"
import CREATEFILMS from "../admin/page/createvideo"
import AUTH from "../auth/auth"
import ConfigRoutes from "../config/config.routes"
import HOMEPAGE from "../pages/Home"
import ALLFILMS from "../pages/allFilms"
import DETAIL from "../pages/detail"
import INTROFILMS from "../pages/intro"
import PROFILE from "../pages/profile"

const PublicRoutes = [
    { path : ConfigRoutes.homepage, component : HOMEPAGE},
    { path : ConfigRoutes.allFilms, component : ALLFILMS},
    { path : ConfigRoutes.intro, component : INTROFILMS},
    { path : ConfigRoutes.detail, component : DETAIL},
    { path : ConfigRoutes.auth, component : AUTH},
    { path : ConfigRoutes.profiles, component : PROFILE, Layout : null},
]

export const AdminRoutes = [
    {path : "/createvideoadmin123dsfrtyasd", component : CREATEFILMS}
]

export default PublicRoutes