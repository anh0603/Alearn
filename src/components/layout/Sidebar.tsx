'use client'
import { menuItem } from "@/constants";
import { TMenuItem } from "@/types";
import { ActiveLink } from "../common";
import { useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../common/ModeToggle";
import Link from "next/link";
import { IconUser } from "../icons";
const Sidebar = () => {
    const {userId} = useAuth();
    return (
        <div className="p-5 border-r border-r-gray-200 dark:border-opacity-10
         bg-white dark:bg-grayDarker  flex flex-col">
            <a href="/" className="font-bold text-4xl inline-block mb-5">
                <span className="text-primary">A</span>
                learn
            </a>
            {menuItem.map((item, index) => (
                <MenuItem
                    key={index}
                    url={item.url}
                    title={item.title}
                    icon={item.icon}
                />
            ))}
            <div className="flex items-center mt-auto justify-end gap-5">
                <ModeToggle></ModeToggle>
                {!userId ? (
                    <Link href='/sign-in'>
                        <IconUser className="size-9 rounded-lg bg-primary text-white flex items-center justify-center p-1" />
                    </Link>
                ) : (
                    <UserButton />
                )}

            </div>
        </div>
    )
    function MenuItem({
        url = '/',
        title = '',
        icon
    }: TMenuItem) {
        return (
            <ul>
                <li>
                    <ActiveLink
                        url={url}
                    >
                        {icon}
                        {title}
                    </ActiveLink>
                </li>
            </ul>
        )
    }
}
export default Sidebar;