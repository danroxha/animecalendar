import React, { useState, useEffect } from 'react'
import Container from '../../components/container/Container.js'
import Header from '../components/Header/Header.js'
import Main from '../components/Main/Main.js'
import BarBottom from '../components/BarBottom/BarBottom.js'

import store from '../../core/mod.js'
import Time from '../../core/utils/time/Time.js'
import Strings from '../../core/utils/strings/Strings.js'


function Home() {
    
    
    const [ animeData, setAnimeData ] = useState([])

    
    useEffect(() => {
        async function main()
        {
            setAnimeData( await store.find( Time.weekday ) )
        }

        main()
        
    }, [] )


    return (
        <Container>
            <Header title = 'Home'/>
            <Main 
                subTitle = {
                    <time> 
                        { `${ Strings.capitalize( Time.weekday ) } List` }
                    </time> 
                }
                animes = { animeData }
            />
            <BarBottom />
        </Container>
    )
}

export default Home