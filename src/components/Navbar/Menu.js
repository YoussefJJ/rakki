import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import { useQuery } from '@apollo/client/react'
import { Link } from 'react-router-dom'
import { GET_COVERS } from '../../graphql/queries'
import { getRandomInt } from '../../utilities/utils'
 

const Menu = () => {
  const [open, setOpen] = useState(false)
  const [covers, setCovers] = useState([])
  const [skip, setSkip] = useState(false)
  const [coverImage, setCoverImage] = useState(null)
  const [coverImgNumber, setCoverImgNumber] = useState(0)

  const { data, loading, error } = useQuery(GET_COVERS, {
    variables: {
        page: getRandomInt(1, 10)
    },
    skip,
    onCompleted: (data) => {
        const animeCovers = data.animePage.media.map((media) => {
            return media.bannerImage
        })
        const mangaCovers = data.mangaPage.media.map((media) => {
            return media.bannerImage
        })

        setCovers({
            anime: animeCovers,
            manga: mangaCovers
        })
        setCoverImage(animeCovers[0])
        setSkip(true)
    }
  })

  useEffect(() => {
    if (covers.anime && open) {
        let number = getRandomInt(0, covers.anime.length - 1)

        while (!covers.anime[number] || !covers.manga[number])
            number = getRandomInt(0, covers.anime.length - 1)

        setCoverImgNumber(number)
        setCoverImage(covers.anime[number])
    }
  }, [open, covers])
  return (
    <div id="menu" className='p-3'>
    <button className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className='hamburger-top bg-brightGreen'></span>
        <span className='hamburger-middle bg-brightGreen'></span>
        <span className='hamburger-bottom bg-brightGreen'></span>
    </button>
    {/* Full screen menu */}
    <div className={`menu bg-veryDarkPurple ${open ? 'menu-open' : ''}`}>
        <div className='w-4/5 h-full mr-auto flex flex-col justify-start space-y-10 z-10'>
            <img src={Logo} alt="RAKKI" style={{
                height: '200px',
                width: '300px',
            }}></img>
            <div id="links" className='pl-7 flex font-osaka flex-col space-y-3 text-6xl text-brightGreen'>
                <div>
                    <Link to={'/anime'}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setCoverImage(covers.anime[coverImgNumber])}
                    className='hover-underline-animation hover:text-white after:bg-white'>
                        RANDOM ANIME
                    </Link>
                </div>
                <div>
                    <Link to={'/manga'}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setCoverImage(covers.manga[coverImgNumber])}
                    className='hover-underline-animation hover:text-white after:bg-white'
                    >
                        RANDOM MANGA
                    </Link>
                </div>
            </div>
        </div>
        <div className={`bg-veryDarkPurple/70 border-4 border-black shadow-greenRecShadow-md w-full h-full absolute -left-1/3 top-1/2`} style={{
            transform: 'rotate(45deg) scale(1.8)',
        }}></div>
        <div className='w-full h-full absolute menu-bg-image' style={{
            zIndex: '-1',
            backgroundImage: `${coverImage ? `url('${coverImage}')` : ''}`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px) brightness(0.3)',
        }}></div>
    </div>

</div>
  )
}

export default Menu