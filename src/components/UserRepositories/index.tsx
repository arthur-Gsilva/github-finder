import { useEffect } from 'react'
import styles from './repositories.module.css'
import { repositorie } from '@/types/repositorie'
import { ResItem } from '../ResItem'

type Props = {
    repositories: repositorie[]
}

export const UserRepositories = ({ repositories }: Props) => {

    return(
        <div className={styles.userRepositories}>
            <h1>Repositórios</h1>

            <div className={styles.resArea}>
                {repositories.map((repositorie) => (
                    <ResItem repositorie={repositorie} key={repositorie.id}/>
                ))}
            </div>
        </div>
    )
}