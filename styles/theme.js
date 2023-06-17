

export default function theme(isDark) {
    return {
        textColor: isDark ? 'black' : 'white',
        BC_Menu: isDark ? 'white' : '#848383',
        BC_Home: isDark ? '#ededed' : '#424141'
    }
}