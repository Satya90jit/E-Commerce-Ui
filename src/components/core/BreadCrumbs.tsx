import { Home } from "@mui/icons-material";
import Link from "next/link";

// const links = [{ id: 1, page: "....", link: "/../..." }];

interface ARRAY {
  id: number;
  page: string;
  link: string;
}

interface Props {
  links?: ARRAY[];
}

const AdminBreadcrumbs = ({ links }: Props) => {
  return (
    <div className="flex md:gap-4 gap-1 items-center tracking-wide flex-wrap my-3">
      <Link href="/">
        <span className="md:px-4 px-2 py-1 bg-white shadow-sm rounded-full hover:shadow-lg md:text-sm text-xs font-medium text-blue-900 cursor-pointer transition-all ease-in-out duration-300">
          <Home className="!text-theme" fontSize="small" /> Home
        </span>
      </Link>
      {links?.map((item) => (
        <div key={item?.id} className="flex md:gap-4 gap-1 items-center">
          <span>/</span>
          <Link href={item?.link}>
            <span className="px-4 py-1 cursor-pointer shadow-sm bg-white rounded-full md:text-sm text-xs font-medium text-blue-900 hover:shadow-lg transition-all ease-in-out duration-300">
              {item?.page}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AdminBreadcrumbs;
