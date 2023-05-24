import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faBagShopping, faDashboard, faSuitcase, faFileCsv } from '@fortawesome/free-solid-svg-icons'



export const sidebarData = [
    {
        icon: <FontAwesomeIcon icon={faDashboard} size='xl' color='error' />,
        text: 'App'
    },
    {
        icon: <FontAwesomeIcon icon={faBagShopping} size='xl' />,
        text: 'E-Commerce'
    },
    {
        icon: <FontAwesomeIcon icon={faChartSimple} size='xl' />,
        text: 'Analytics'
    },
    {
        icon: <FontAwesomeIcon icon={faSuitcase} size='xl' />,
        text: 'Banking'
    },
    {
        icon: <FontAwesomeIcon icon={faFileCsv} size='xl' />,
        text: 'File'
    }
]
