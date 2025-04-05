import { AppbarInvoicing, AppbarLink, AppbarMediakit, AppbarStore } from "../Icon/icons";

interface AppbarIcons {
  icon: React.ReactNode
}

const Appbar = () => {

  const appbarIcons: AppbarIcons[] = [
    { icon: <AppbarLink className="w-5 h-5 fill-gray" /> },
    { icon: <AppbarStore className="w-5 h-5 fill-gray" /> },
    { icon: <AppbarMediakit className="w-5 h-5 fill-gray" /> },
    { icon: <AppbarInvoicing className="w-5 h-5 fill-gray" /> },
  ];


  return (
    <div className="hidden lg:inline-flex p-2 fixed top-[310px] h-[192px] left-4 bg-white rounded-full shadow-app-bar">
      <div className="inline-flex flex-col justify-between items-center h-full">
        {appbarIcons.map((item, index) => (
          <div
            key={index}
            className="p-2 rounded-full hover:bg-gray cursor-pointer"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appbar