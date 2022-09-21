import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import { GITHUB_LOGO } from '../../utilities/constants'
import Canva from '../../assets/img/canva.svg'
import { useEffect } from 'react'

const ExternalLink = ({ href, className, children}) => {
    return (
        <a href={href} target="_blank" className={`hover:underline font-bold ${className ?? ''}`}>
            {children}
        </a>
    )
}

const About = () => {
  useEffect(() => {
    document.title = 'About | Rakki'
  }, [])

  return (
    <div className='md:h-[calc(100vh_-_80px)] bg-veryDarkPurple'>
        <div className='w-4/5 m-auto h-full flex flex-col md:flex-row flex-wrap justify-center items-center py-6 space-y-2'>
            <div className='w-3/5'>
                <img src={Logo} alt="rakki logo" className="h-96 w-96"/>
            </div>
            <div className='md:w-2/5'>
                <h1 className='text-2xl font-bold text-brightGreen'>Rakki 🍀</h1>
                <div className='p-1 text-white text-large'>
                    <h1 className='font-bold mb-5'>A random anime/manga generator</h1>
                    <p >Made with ♡ by <ExternalLink href='https://github.com/YoussefJJ'>YoussefJJ</ExternalLink></p>
                    <p className='inline-block'> Logo made with <ExternalLink href='https://canva.com' className="inline-block">
                            Canva
                            <img src={Canva} alt="canva logo" className="h-6 w-6 float-right ml-1"/>
                        </ExternalLink></p>
                    <p className='inline-block mt-5'>You can check the source code on <ExternalLink href="https://github.com/YoussefJJ/rakki" className='inline-block text-center'>
                        GitHub
                        <img src={GITHUB_LOGO} className='float-right h-6 w-6 ml-1'/>
                    </ExternalLink>
                    </p> 
                </div>
                <div className='w-full mt-5'>
                    <h1 className='text-2xl font-bold text-brightGreen'>Credits: </h1>
                    <div className='p-1 text-white text-large'>
                        <ul className='list-disc list-inside'>
                            <li>
                                <ExternalLink href='https://anilist.co'>Anilist</ExternalLink> and <ExternalLink href='https://anilist.gitbook.io/anilist-apiv2-docs/'>Anilist API</ExternalLink>
                            </li>
                            <li>
                                Nezuko Running GIF is taken from <ExternalLink href='https://giphy.com/stickers/kimetsu-no-yaiba-demon-slayer-metarupx-Q7pDtp0bIvJFgRsHHN'>Giphy</ExternalLink>   
                            </li>
                            <li>
                                Nagito(Loading GIF) is a sprite animation from the game <ExternalLink href='https://store.steampowered.com/app/413420/Danganronpa_2_Goodbye_Despair?snr=1_7_15__13'>Danganronpa 2: Goodbye Despair</ExternalLink>
                            </li>
                            <li>
                                Cat GIF made by <ExternalLink href='https://weheartit.com/entry/185031802'>Muffin</ExternalLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About