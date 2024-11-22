import { AuthProvider } from './auth';
import { AppRouter } from './router/AppRouter';


export const HeroesApp = () => {
  console.log('TEST trigger')
  return (
    <AuthProvider>
        
        <AppRouter />
        
    </AuthProvider>
  )
}