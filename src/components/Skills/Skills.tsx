import { SkillDetails } from "@/lib/types";
import ReactLogo from '@/assets/tecnologies/react.svg'
import ReduxLogo from '@/assets/tecnologies/redux.svg'
import JSLogo from '@/assets/tecnologies/js.svg'
import TYSLogo from '@/assets/tecnologies/tys.svg'
import NextLogo from '@/assets/tecnologies/next.svg'
import CSSLogo from '@/assets/tecnologies/css3.svg'

export const SkillsDetails: SkillDetails[] = [
    { icon: <ReactLogo />, value: 80, name: 'React' },
    { icon: <ReduxLogo />, value: 60, name: 'Redux' },
    { icon: <JSLogo />, value: 90, name: 'JavaScript' },
    { icon: <TYSLogo />, value: 70, name: 'TypeScript' },
    { icon: <NextLogo />, value: 60, name: 'Next' },
    { icon: <CSSLogo />, value: 95, name: 'CSS3' },
]