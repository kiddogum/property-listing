"use client";

import Link from "next/link";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { id } = useParams();
  const name = searchParams.get("name");
  const pathName = usePathname();

  return (
    <>
      <div>properties page</div>
      <Link href="/" className="bg-blue-200 p-2">
        go home {name}
      </Link>
    </>
  );
};

export default page;
