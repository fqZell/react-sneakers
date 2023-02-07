export const HeartItem = ({ size = 28, color = "#ECECEC" }) => {
    return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="icon icon-tabler icon-tabler-heart-filled" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        strokeWidth="2" 
        stroke={color} 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" fill="#ffffff"></path>
    </svg>
    )
}

export const SearchIcon = ({ size = 28, color = "#ECECEC" }) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={size} height={size} viewBox="0 0 24 24" 
    strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
    <path d="M21 21l-6 -6"></path>
    </svg>
    )
}

export const PlusIcon = ({ size = 28, color = "#ECECEC" }) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-rounded-plus" width={size} height={size} viewBox="0 0 24 24" 
    strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 12h6"></path>
    <path d="M12 9v6"></path>
    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
    </svg>
    )
}

export const CancelIcon = ({size = 18, color = "#ECECEC"}) => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M18 6l-12 12"></path>
    <path d="M6 6l12 12"></path>
    </svg>
    )
}