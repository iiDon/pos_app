import { useEffect } from 'react'
import useProtectedRoute from '../../../hooks/protectRoutes'



const Index = () => {
    useProtectedRoute();

    return (
        <div>index</div>
    )
}

export default Index