import styles from './userinfo.module.css'
import { userData } from '@/types/userData'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import  { useRouter } from 'next/router'

type Props = {
    userData: userData[]
}

export const UserInfo = ({ userData }: Props) => {
    const router = useRouter()

    const backHome = () => {
        router.push('/')
    }

    return(
        <div className={styles.userInfo}>

            <button className={styles.backButton} onClick={backHome}>
                <AiOutlineArrowLeft />
                Voltar
            </button>

            <img src={userData.avatar_url} alt="avatar do usuário"/>
            <h3>{userData.name}</h3>
            <p>{userData.location}</p>
            <p>Seguindo: {userData.following}</p>
            <p>Seguidores: {userData.followers}</p>
        </div>
    )
}