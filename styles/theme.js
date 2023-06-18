

export default function theme(isDark) {
    return {
        textColor: isDark ?  'white' : 'black',
        BC_Menu: isDark ?  '#848383' : 'white',
        BC_Home: isDark ?  '#424141' : '#ededed'
    }
}