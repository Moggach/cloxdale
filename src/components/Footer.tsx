import Link from 'next/link';
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
    <footer className={`p-4 flex flex-col gap-20 md:flex-row md:justify-between lg:p-40 font-fira text-base ${bgColor} ${textColor}`}>
      &copy; Cameron Loxdale 2026
      <div className="flex flex-row gap-2 items-center">
              <a href="https://bsky.app/profile/cloxdale.bsky.social">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 600 530"
            className={` ${theme === 'dark' ? 'svg-dark' : 'svg-light'}`}>
            <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
          </svg>      </a>
        <Link href="/instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 448 512"
            className={` ${theme === 'dark' ? 'svg-dark' : 'svg-light'}`}>
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </Link>
        <a href="https://linktr.ee/cloxdale">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 417 512.238" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
            className={` ${theme === 'dark' ? 'svg-dark' : 'svg-light'}`}>

            <path fillRule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z" />
          </svg>          </a>
      </div>


    </footer>
  )
}
