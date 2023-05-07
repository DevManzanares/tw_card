import { TwFollowCard } from "./TwFollowCard"
import './TwFollowCard.css'
export function App(){
    return(
        <>
            <section className= "Card">
                <h1>Tal vez te guste</h1>

                <TwFollowCard isFollowing userName= "jorge_jr15">
                    Jorge M
                </TwFollowCard>
                <TwFollowCard isFollowing={false} userName="Naidvy">
                    Norman
                </TwFollowCard>
                <TwFollowCard isFollowing userName="jr_george02">
                    Manza
                </TwFollowCard>
                <TwFollowCard isFollowing={false} userName="ufotable">
                   Ufotable
                </TwFollowCard>
            </section>
            
        </>
    )
}