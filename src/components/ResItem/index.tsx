import styles from './resItem.module.css'
import { repositorie } from "@/types/repositorie"
import { AiFillStar } from 'react-icons/ai'

type Props = {
    repositorie: repositorie
}

export const ResItem = ({ repositorie }: Props) => {
    return(
        <div className={styles.resItem}>
            <h5>{repositorie.name}</h5>
            <div className={styles.starCount}>
                <AiFillStar />
                <span>{repositorie.stargazers_count}</span>
            </div> 
            <a href={repositorie.html_url} target='_blank' rel='noreferrer'>Acesse aqui</a>
        </div>
    )
}