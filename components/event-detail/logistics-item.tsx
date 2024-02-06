import { FC, ReactNode } from "react";
interface ILogisticsItem {
  icon: FC;
  children: ReactNode;
}

const LogisticsItem: FC<ILogisticsItem> = ({ icon: Icon, children }) => {
  return (
    <li className="flex text-2xl items-center flex-col text-[#aefff8] justify-center  md:items-start ">
      <span className="mr-4 text-[#18e0d0] w-8 h-8">
        <Icon />
      </span>
      <span>{children}</span>
    </li>
  );
};

export default LogisticsItem;
