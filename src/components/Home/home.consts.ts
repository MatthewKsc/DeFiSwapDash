import { IDexInformationCard, IFooterConnectWithUsIcon, IFooterQuickLink } from "./home.models";
import InstagramIcon from "../../icons/InstagramIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import XTwitterIcon from "../../icons/XTwitterIcon";
import DiscordIcon from "../../icons/DiscordIcon";

export const dexInfoCards: IDexInformationCard[] = [
    { title: 'Active Users', value: '125K+', description: 'Monthly active traders' },
    { title: 'Daily Swaps', value: '1.2M', description: 'Average daily transactions' },
    { title: 'Total Volume', value: '$3.8B', description: 'Lifetime trading volume' },
    { title: 'Chains Supported', value: '12', description: 'Major blockchains integrated' },
]

export const footerQuickLinks: IFooterQuickLink[] = [
    { title: 'Documentation', url: '/docs' },
    { title: 'Support Center', url: '/support' },
    { title: 'Contact Us', url: '/contact' },
    { title: 'Terms of Service', url: '/terms' },
    { title: 'Privacy Policy', url: '/privacy' },
]

export const footerConnectWithUsIcons: IFooterConnectWithUsIcon[] = [
    { label: 'Discord', url: '', icon: DiscordIcon },
    { label: 'Instagram', url: '', icon: InstagramIcon },
    { label: 'Facebook', url: '', icon: FacebookIcon },
    { label: 'Twitter', url: '', icon: XTwitterIcon },
];