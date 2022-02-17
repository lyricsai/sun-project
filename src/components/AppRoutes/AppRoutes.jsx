import { routes } from '../../routes/routes'
import { Routes, Route } from 'react-router'


const AppRoutes = () => {

    return (
        <Routes>

            {routes.map(({ path, Component }) =>
                <Route key={path} exact path={path} element={<Component />} />
            )}

        </Routes>
    )
}

export default AppRoutes