import  {useContext} from 'react';
import { AuthContext } from '../hoc/AuthProvider';


export function useAuth(){
    // console.log('useAuth()')
    return useContext(AuthContext)
}