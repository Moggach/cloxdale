import { useTheme } from './ThemeContext';

const Dots = () => {

    const { theme } = useTheme();
    const bgColor = theme === 'dark' ? 'bg-darkPrimary' : 'bg-lightPrimary';

    return(

    <div className="flex items-center justify-around">
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
        <div className={`dot ${bgColor}`}></div>
    </div>
    )

}

export default Dots