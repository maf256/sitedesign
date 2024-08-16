

// Ture is dark mode

export default function theme(isDark) {
    return {
        Text_Title: isDark ?  '#bbbbb8' : '#787878',
        Text_Logo: isDark ?  '#fff' : '#000',
        Text_Menu: isDark ?  '#bbbbb4' : '#767676',
        Text_Menu_Hover: isDark ?  '#fff' : '#000',
        BC_Menu: isDark ?  '#494b50' : 'white',
        BC_Home: isDark ?  '#34353a' : '#f8f8f8',
        BC_Home2: isDark ?  '#494b50' : 'white',
        Icon_Color: isDark ? 'white' : 'black',
        Icon_bkColor: isDark ? '#606680' : '#F0F1F4',
        Text_Paragraph: isDark ? '#bbbbb8' : '#2E2A2A'
    }
}
