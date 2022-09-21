import React, { useEffect, useState } from 'react'
import Logo from '../../assets/img/rakki-logo-green.svg'
import { useQuery } from '@apollo/client/react'
import { Link, useLocation } from 'react-router-dom'
import { GET_COVERS } from '../../graphql/queries'
import { getRandomInt } from '../../utilities/utils'
 

const Menu = ({ showBanner = true}) => {
    const location = useLocation()
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
        const animeCovers = data.animePage.media.filter(anime => anime.bannerImage !== null)
        const mangaCovers = data.mangaPage.media.filter(manga => manga.bannerImage !== null)
        const length = Math.min(animeCovers.length, mangaCovers.length)

        setCovers({
            anime: animeCovers.slice(0, length),
            manga: mangaCovers.slice(0, length)
        })
        setCoverImage(animeCovers[0])
        setSkip(true)
    }
  })

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    if (covers.anime && open) {
        let number = getRandomInt(0, covers.anime.length - 1)

        while (!covers.anime[number] || !covers.manga[number])
            number = getRandomInt(0, covers.anime.length - 1)

        setCoverImgNumber(number)
        setCoverImage(covers.anime[number])
    }
  }, [open, covers])
  
  useEffect(() => {
    // add event listener on escape key press
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false)
        }
    }
    document.addEventListener('keydown', handleEscape)
    return () => {
        document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div id="menu">
    <button className={`group hamburger outline-none ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <span className='hamburger-top bg-brightGreen group-hover:bg-white'></span>
        <span className='hamburger-middle bg-brightGreen group-hover:bg-white'></span>
        <span className='hamburger-bottom bg-brightGreen group-hover:bg-white'></span>
    </button>
    {/* Full screen menu */}
    <div className={`menu bg-veryDarkPurple ${open ? 'menu-open' : ''}`}>
        <div className='w-4/5 h-full mr-auto flex flex-col justify-start mt-10 space-y-5 z-10 pl-10'>
            <img src={Logo} alt="RAKKI" style={{
                height: '200px',
                width: '300px',
            }}></img>
            <div id="links" className='pl-7 flex font-osaka flex-col space-y-3 text-3xl md:text-6xl text-brightGreen'>
                <div>
                    <Link to={'/anime'}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setCoverImage(covers.anime[coverImgNumber])}
                    className='hover-underline-animation hover:text-brightGreen after:bg-brightGreen'>
                        RANDOM ANIME
                    </Link>
                </div>
                <div>
                    <Link to={'/manga'}
                    onClick={() => setOpen(false)}
                    onMouseEnter={() => setCoverImage(covers.manga[coverImgNumber])}
                    className='hover-underline-animation hover:text-brightGreen after:bg-brightGreen'
                    >
                        RANDOM MANGA
                    </Link>
                </div>
                <div>
                    <Link to={'/favourites'}
                    onClick={() => setOpen(false)}
                    className='hover-underline-animation hover:text-brightGreen after:bg-brightGreen'
                    >
                        MY FAVOURITES
                    </Link>
                </div>
                <div>
                    <Link to={'/about'}
                    onClick={() => setOpen(false)}
                    className='hover-underline-animation hover:text-brightGreen after:bg-brightGreen'
                    >
                        ABOUT
                    </Link>
                </div>
            </div>
        </div>
        <div className={`bg-veryDarkPurple/70 border-4 border-black shadow-greenRecShadow-md w-full hidden h-full absolute -left-1/3 top-1/2 md:block`} style={{
            transform: 'rotate(45deg) scale(1.8)',
        }}></div>
        <div className='w-full h-full absolute menu-bg-image' style={{
            zIndex: '-1',
            backgroundImage: `${coverImage?.bannerImage ? `url('${coverImage?.bannerImage}')` : ''}`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(5px) brightness(0.3)',
        }}></div>
        <span 
        title={coverImage?.title?.romaji}
        className='w-1/6 text-right mr-0.5 line-clamp-2 text-xs text-white font-medium absolute bottom-0 right-0'>{coverImage?.title.romaji}</span>
    </div>

</div>
  )
}

export default Menu