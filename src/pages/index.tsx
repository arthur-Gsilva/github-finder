import styles from '../styles/Home.module.css'

import Head from 'next/head'
import { FormEvent, useState } from 'react'
import { GoMarkGithub } from 'react-icons/go'
import { useRouter } from 'next/router'


export default function Home() {

    const [user, setUser] = useState<string>('')
    const router = useRouter()


    const searchUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/${user}`)
    }

    return(

        <div className={styles.home}>

            <Head>
                <title>Github Finder</title>
            </Head>


            <GoMarkGithub className={styles.logoIcon}/>
            <h1>Github Finder</h1>
            
            <form onSubmit={searchUser} className={styles.form}>
                <input 
                    type="text" 
                    placeholder='Digite o nome do usuário'
                    value={user}
                    onChange={e => setUser(e.target.value)}
                />

                <button>Buscar</button>
            </form>

        </div>
    )
}
