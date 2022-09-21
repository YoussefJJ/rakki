import React from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import { GITHUB_LOGO } from '../../utilities/constants'

const About = () => {
  return (
    <div className='md:h-[calc(100vh_-_80px)] bg-veryDarkPurple'>
        <div className='w-4/5 m-auto h-full flex flex-col md:flex-row flex-wrap justify-center items-center py-6 space-y-2'>
            <div className='w-3/5'>
                <img src={Logo} alt="rakki logo" className="h-96 w-96"/>
            </div>
            <div className='md:w-2/5'>
                <h1 className='text-2xl font-bold text-brightGreen'>Rakki 🍀</h1>
                <div className='p-1 text-white text-large'>
                    <h1 className='font-bold'>A random anime/manga generator</h1>
                    <p >Made with ♡ by YoussefJJ</p>
                    <p className='inline-block'>You can check the source code on <a href="https://github.com/YoussefJJ/rakki" target="_blank" className='font-bold hover:underline inline-block text-center'>
                        GitHub
                        <img src={GITHUB_LOGO} className='float-right h-6 w-6 ml-1'/>
                    </a>
                    </p> 
                </div>
                <div className='w-full mt-5'>
                    <h1 className='text-2xl font-bold text-brightGreen'>Credits: </h1>
                    <div className='p-1 text-white text-large'>
                        <ul className='list-disc list-inside'>
                            <li>
                                <a href='https://anilist.gitbook.io/anilist-apiv2-docs/' target="_blank" className='hover:underline font-bold'>Anilist API</a>
                            </li>
                            <li>
                                Nezuko Running GIF is taken from <a href='https://giphy.com/stickers/kimetsu-no-yaiba-demon-slayer-metarupx-Q7pDtp0bIvJFgRsHHN' className='hover:underline font-bold'>Giphy</a>   
                            </li>
                            <li>
                                Nagito(Loading GIF) is a sprite animation from the game <a className='hover:underline font-bold' target="_blank" href='https://store.steampowered.com/app/413420/Danganronpa_2_Goodbye_Despair?snr=1_7_15__13'>Danganronpa 2: Goodbye Despair</a>
                            </li>
                            <li>
                                Cat GIF belongs to <a href='https://weheartit.com/entry/185031802' target="_blank" className="hover:underline font-bold text-white">Muffin</a>
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