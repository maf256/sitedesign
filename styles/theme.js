

// Ture is dark mode

export default function theme(isDark) {
    return {
        Text_Title: isDark ?  '#bbbbb8' : '#787878',
        Text_Logo: isDark ?  '#fff' : '#000',
        Text_Menu: isDark ?  '#bbbbb4' : '#767676',
        Text_Menu_Hover: isDark ?  '#fff' : '#000',
        BC_Menu: isDark ?  '#494b50' : 'white',
        BC_Home: isDark ?  '#34353a' : '#f8f8f8',
        Icon_Color: isDark ? 'white' : 'white',
        Icon_bkColor: isDark ? '#34353a' : '#494b50',
        Text_Paragraph: isDark ? '#bbbbb8' : '#bbbbb8'
    }
}
