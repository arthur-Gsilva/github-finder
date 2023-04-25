import  { useRouter } from 'next/router'
import styles from '../styles/userpage.module.css'
import { UserInfo } from '@/components/UserInfo'
import { UserRepositories } from '@/components/UserRepositories'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { userData } from '@/types/userData'
import { repositorie } from '@/types/repositorie'


const UserPage = () => {
    const router = useRouter()
    const { slug } = router.query

    const [userData, setUserData] = useState<userData[]>([])
    const [repositories, setRepositories] = useState<repositorie[]>([])
    const [isLoanding, setIsLoading] = useState<boolean>(false)

    const loadUser = async (username: string) => {
        setIsLoading(true)
        const jsonUser = await axios.get(`https://api.github.com/users/${username}`)
        const jsonRepositories = await axios.get(`https://api.github.com/users/${username}/repos`)
        setUserData(jsonUser.data)
        setRepositories(jsonRepositories.data)
        setIsLoading(false)
    }

    useEffect(() => {
        loadUser(slug as string)
    }, [])

    return(
        <div className={styles.userPage}>
            {!isLoanding &&
                <>
                    <UserInfo userData={userData}/>

                    <UserRepositories repositories={repositories}/>
                </>
            }

            {isLoanding &&
                <img src='https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif' alt="spinner loading" className={styles.spinner}/>
            }

        </div>
    )
}

export default UserPage