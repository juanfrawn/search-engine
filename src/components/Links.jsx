import { NavLink } from 'react-router-dom'

const links = [
    { url: '/search', text: '🔎 All' },
    { url: '/image', text: '📷 Images' },
    { url: '/news', text: '📰 News' },
]

let activeStyle = {
    borderBottom: "2px solid #00bcd4",
    color: "#00bcd4",
}

export const Links = () => {
  return (
    <div className='flex justify-between items-center sm:justify-start'>
        {links.map(({url, text}) => (
            <NavLink key={text} to={url} className="mx-0 mt-4 sm:mr-10" style={({isActive}) => isActive ? activeStyle : undefined}>
                {text}
            </NavLink>
        ))}
    </div>
  )
}
