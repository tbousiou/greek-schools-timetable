import { X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const navGroups = [
    {
        title: 'Πρωτοβάθμια',
        items: [
            { title: 'Νηπιαγωγείο', path: '/nipiagogio' },
            { title: 'Δημοτικό', path: '/dimotiko' },
        ],
    },
    {
        title: 'Γυμνάσια',
        items: [
            { title: 'Ημερήσιο Γυμνάσιο', path: '/imerisio-gymnasio' },
            { title: 'Εσπερινό Γυμνάσιο', path: '/esperino-gymnasio' },
        ],
    },
    {
        title: 'Γενικό Λύκειο',
        items: [
            { title: 'Ημερήσιο Γενικό Λύκειο', path: '/imerisio-geniko-lykeio' },
            { title: 'Εσπερινό Γενικό Λύκειο', path: '/esperino-geniko-lykeio' },
        ],
    },
    {
        title: 'ΕΠΑ.Λ.',
        items: [
            { title: 'Ημερήσιο ΕΠΑ.Λ.', path: '/imerisio-epal' },
            { title: 'Εσπερινό ΕΠΑ.Λ.', path: '/esperino-epal' },
            { title: 'Πρότυπο ΕΠΑ.Λ.', path: '/protypo-epal' },
        ],
    },
    {
        title: 'ΕΝΕΕΓΥΛ',
        items: [
            { title: 'Γυμνάσιο', path: '/eneegyl-gymnasio' },
            { title: 'Λύκειο', path: '/eneegyl-lykeio' },
        ],
    },
     {
        title: 'EAE',
        items: [
            { title: 'Γυμνάσιο', path: '/eae-gymnasio' },
            { title: 'Λύκειο', path: '/eae-lykeio' },
        ],
    },
    {
        title: 'Μουσικά',
        items: [
            { title: 'Γυμνάσιο', path: '/mousiko-gymnasio' },
            { title: 'Λύκειο', path: '/mousiko-lykeio' },
        ],
    },
    {
        title: 'Καλλιτεχνικά',
        items: [
            { title: 'Γυμνάσιο', path: '/kallitexniko-gymnasio' },
            { title: 'Λύκειο', path: '/kallitexniko-lykeio' },
        ],
    },
]

function Sidebar({ sidebarOpen, toggleSidebar }) {
    const [expandedGroups, setExpandedGroups] = useState({});
    
    const toggleGroup = (groupIndex) => {
        setExpandedGroups(prev => ({
            ...prev,
            [groupIndex]: !prev[groupIndex]
        }));
    };

    return (
        <>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <aside
                className={`
          fixed lg:relative w-64 h-full bg-slate-800 text-white z-20
          transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
            >
                <div className="p-4 flex justify-between items-center border-b border-slate-700">
                    <Link to="/" className="text-xl font-bold">
                        MyApp
                    </Link>
                    <button onClick={toggleSidebar} className="lg:hidden text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4">
                    <ul className="space-y-4">
                        {navGroups.map((group, groupIndex) => (
                            <li key={groupIndex}>
                                <button 
                                    onClick={() => toggleGroup(groupIndex)}
                                    className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-300 mb-2 hover:text-white"
                                >
                                    <span>{group.title}</span>
                                    {expandedGroups[groupIndex] ? (
                                        <ChevronDown size={18} />
                                    ) : (
                                        <ChevronRight size={18} />
                                    )}
                                </button>
                                <ul 
                                    className={`space-y-2 overflow-hidden transition-all duration-300 ${
                                        expandedGroups[groupIndex] 
                                        ? 'max-h-40 opacity-100 mt-2' 
                                        : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    {group.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link
                                                to={item.path}
                                                className="block p-2 rounded-md hover:bg-slate-700 transition-colors pl-4"
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar