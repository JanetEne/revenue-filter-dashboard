import { useGetUserData } from "@/lib/hooks/user";
import { cn } from "@/utils/cn";
import { getInitials } from "@/utils/getInitials";
import { Button } from "../Button";
import Icon, { IconName } from "../Icon";
import { Chat, MainstackLogo, Menu, Notifications } from "../Icon/icons";
import { Skeleton } from "../Skeleton";

interface NavItems {
  icon: IconName
  label: string
  active: boolean
}

const Navbar = () => {
  const { data, isLoading } = useGetUserData()

  const navItems: NavItems[] = [
    { icon: 'NavbarHome', label: "Home", active: false },
    {
      icon: 'NavbarAnalytics',
      label: "Analytics",
      active: false,
    },
    {
      icon: 'NavbarPayments',
      label: "Revenue",
      active: true,
    },
    { icon: 'NavbarCrm', label: "CRM", active: false },
    {
      icon: 'NavbarWidgets',
      label: "Apps",
      active: false,
    },
  ];

  return (
    <header className="sticky top-0 w-full z-50">
      <div className="relative mx-3 mt-3 bg-white rounded-full shadow-mode-100">
        <nav className="flex items-center justify-between px-5 py-4">
          <div className="flex-shrink-0">
            <MainstackLogo className="w-8 h-8" />
          </div>

          <div className="flex items-center justify-center gap-5">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant={item.active ? 'default' : 'ghost'}
              >
                <Icon icon={item.icon} className="w-5 h-5" />
                <span className={cn('text-gray-400 font-normal text-base', { "text-white": item.active })}>
                  {item.label}
                </span>
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 rounded-[100px]"
            >
              <Notifications className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
            >
              <Chat className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2 pl-[5px] pr-3 py-1 bg-gray rounded-full">
              <div className="w-8 h-8 rounded-full items-center flex justify-center bg-gradient-to-br from-[rgba(92,102,112,1)] to-[rgba(19,19,22,1)] text-white text-xs">

                {isLoading ? <Skeleton className="w-full h-full rounded-full" /> : <p>
                  {getInitials(`${data?.first_name} ${data?.last_name}`)}
                </p>}
              </div>
              <Menu className="w-6 h-6" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;