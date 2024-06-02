import { useTheme } from './ThemeContext';

export default function Footer() {

  const { setLightTheme, setDarkTheme, setTooDarkTheme } = useTheme();
  const { theme } = useTheme();

  let bgColor, textColor;

  if (theme === 'dark') {
    bgColor = 'bg-darkPrimary';
    textColor = 'text-darkText';
  } else if (theme === 'tooDark') {
    bgColor = 'bg-tooDark';
  } else {
    bgColor = 'bg-lightPrimary';
    textColor = 'text-lightText';
  }

  return (
    <footer className={`p-4 flex flex-col gap-20 md:flex-row md:justify-between lg:p-40 font-karla text-base ${bgColor} ${textColor}`}>
      &copy; Cameron Loxdale 2024
      <div className="flex flex-row gap-2">
              <a href="https://twitter.com/Cloxdale">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 300 300.251" version="1.1"
            className={` ${theme === 'dark' ? 'svg-dark' : 'svg-light'}`}>

            <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
          </svg>      </a>
        <a href="https://linktr.ee/cloxdale">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 417 512.238" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
            className={` ${theme === 'dark' ? 'svg-dark' : 'svg-light'}`}>

            <path fillRule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z" />
          </svg>          </a>
      </div>


    </footer>
  )
}
