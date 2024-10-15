import { IconComment, IconExplore, IconOder, IconPlay, IconStudy, IconUser} from "@/components/icons"; 

export const menuItem : {
    url: string,
    title: string,
    icon: React.ReactNode
}[] = [
    {
        url: '/',
        title: 'Khám phá',
        icon: <IconExplore className="size-5"/>
    },
    {
        url: '/study',
        title: 'Khu vực học tập',
        icon: <IconPlay className="size-5"/>
    },
    {
        url: '/manage/course',
        title: 'Quản lý khóa học',
        icon: <IconStudy className="size-5"/>
    },{
        url: '/manage/member',
        title: 'Quản lý thành viên',
        icon: <IconUser className="size-5"/>
    },
    {
        url: '/manage/oder',
        title: 'Quản lý đơn hàng',
        icon: <IconOder className="size-5"/>
    },
    {
        url: '/manage/comment',
        title: 'Quản lý bình luận',
        icon: <IconComment className="size-5"/>
    }
];